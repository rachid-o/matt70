import { useState, useEffect, useCallback, useRef } from "react";

const COMPASS_PERMISSION_KEY = "llt_compass_permission_granted";

function hasStoredPermission() {
  try {
    return localStorage.getItem(COMPASS_PERMISSION_KEY) === "true";
  } catch {
    return false;
  }
}

export function useCompass() {
  const [heading, setHeading] = useState(null);
  const [permissionNeeded, setPermissionNeeded] = useState(
    () => typeof DeviceOrientationEvent?.requestPermission === "function" && !hasStoredPermission()
  );
  const [permissionGranted, setPermissionGranted] = useState(hasStoredPermission);
  const [error, setError] = useState(null);
  const [compassAvailable, setCompassAvailable] = useState(null);
  const absoluteConfirmedRef = useRef(false);
  const fallbackTimerRef = useRef(null);
  const smoothedHeadingRef = useRef(null);

  function getScreenAngle() {
    return Number(window.screen?.orientation?.angle ?? window.orientation ?? 0);
  }

  function updateHeading(rawHeading) {
    const normalized = (rawHeading + 360) % 360;
    const previous = smoothedHeadingRef.current;
    if (previous === null) {
      smoothedHeadingRef.current = normalized;
    } else {
      const difference = ((normalized - previous + 540) % 360) - 180;
      smoothedHeadingRef.current = (previous + difference * 0.2 + 360) % 360;
    }
    setHeading(smoothedHeadingRef.current);
  }

  const handleOrientation = useCallback((event) => {
    if (event.webkitCompassHeading != null) {
      // iOS — absolute compass heading, 0 = north, clockwise
      absoluteConfirmedRef.current = true;
      setCompassAvailable(true);
      updateHeading(event.webkitCompassHeading);
    } else if (event.alpha != null) {
      if (event.absolute === true) {
        absoluteConfirmedRef.current = true;
        setCompassAvailable(true);
        updateHeading(360 - event.alpha + getScreenAngle());
      } else if (!absoluteConfirmedRef.current) {
        setCompassAvailable(true);
        updateHeading(360 - event.alpha + getScreenAngle());
      }
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      try {
        const result = await DeviceOrientationEvent.requestPermission();
        if (result === "granted") {
          try {
            localStorage.setItem(COMPASS_PERMISSION_KEY, "true");
          } catch {}
          setPermissionNeeded(false);
          setPermissionGranted(true);
        } else {
          setError("Kompas-toegang geweigerd.");
          setCompassAvailable(false);
        }
      } catch {
        setError("Kon kompas niet activeren.");
        setCompassAvailable(false);
      }
    }
  }, [handleOrientation]);

  useEffect(() => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function" && !permissionGranted) {
      // iOS 13+ — needs explicit permission first
      setPermissionNeeded(true);
      return;
    }

    // Listen to both event names because Android browsers differ in support and flags.
    const eventNames = ["deviceorientationabsolute", "deviceorientation"];
    eventNames.forEach((eventName) => {
      window.addEventListener(eventName, handleOrientation, true);
    });

    // After 3s without absolute data: mark compass as unavailable
    fallbackTimerRef.current = setTimeout(() => {
      if (!absoluteConfirmedRef.current) {
        setCompassAvailable(false);
      }
    }, 3000);

    return () => {
      eventNames.forEach((eventName) => {
        window.removeEventListener(eventName, handleOrientation, true);
      });
      clearTimeout(fallbackTimerRef.current);
    };
  }, [handleOrientation, permissionGranted]);

  return { heading, permissionNeeded, requestPermission, error, compassAvailable };
}
