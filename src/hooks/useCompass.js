import { useState, useEffect, useCallback, useRef } from "react";

export function useCompass() {
  const [heading, setHeading] = useState(null);
  const [permissionNeeded, setPermissionNeeded] = useState(false);
  const [error, setError] = useState(null);
  const [compassAvailable, setCompassAvailable] = useState(null);
  const absoluteConfirmedRef = useRef(false);
  const fallbackTimerRef = useRef(null);

  const handleOrientation = useCallback((event) => {
    if (event.webkitCompassHeading != null) {
      // iOS — absolute compass heading, 0 = north, clockwise
      absoluteConfirmedRef.current = true;
      setCompassAvailable(true);
      setHeading(event.webkitCompassHeading);
    } else if ((event.absolute === true || event.type === "deviceorientationabsolute") && event.alpha != null) {
      // Android — alpha increases counter-clockwise. Include screen rotation
      // so the heading describes the top edge of the visible screen.
      absoluteConfirmedRef.current = true;
      setCompassAvailable(true);
      const screenAngle = window.screen?.orientation?.angle ?? window.orientation ?? 0;
      setHeading((360 - event.alpha + screenAngle + 360) % 360);
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      try {
        const result = await DeviceOrientationEvent.requestPermission();
        if (result === "granted") {
          window.addEventListener("deviceorientation", handleOrientation, true);
          setPermissionNeeded(false);
          fallbackTimerRef.current = setTimeout(() => {
            if (!absoluteConfirmedRef.current) setCompassAvailable(false);
          }, 3000);
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
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      // iOS 13+ — needs explicit permission first
      setPermissionNeeded(true);
      return;
    }

    // Browsers differ in whether absolute data is exposed on the dedicated
    // event or on deviceorientation, so listen for both and inspect the event.
    window.addEventListener("deviceorientationabsolute", handleOrientation, true);
    window.addEventListener("deviceorientation", handleOrientation, true);

    // After 3s without absolute data: mark compass as unavailable
    fallbackTimerRef.current = setTimeout(() => {
      if (!absoluteConfirmedRef.current) {
        setCompassAvailable(false);
      }
    }, 3000);

    return () => {
      window.removeEventListener("deviceorientationabsolute", handleOrientation, true);
      window.removeEventListener("deviceorientation", handleOrientation, true);
      clearTimeout(fallbackTimerRef.current);
    };
  }, [handleOrientation]);

  return { heading, permissionNeeded, requestPermission, error, compassAvailable };
}
