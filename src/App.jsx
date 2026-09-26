import { useCallback, useEffect, useMemo, useState } from "react";
import { useWakeLock } from "./hooks/useWakeLock";
import { useProgress } from "./hooks/useProgress";
import PinScreen from "./components/PinScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import NavigationScreen from "./components/NavigationScreen";
import ArrivalScreen from "./components/ArrivalScreen";
import PuzzleScreen from "./components/PuzzleScreen";
import StopCompleteScreen from "./components/StopCompleteScreen";
import FinalScreen from "./components/FinalScreen";
import RefreshButton from "./components/RefreshButton";
import ResetButton from "./components/ResetButton";
import FwButton from "./components/FwButton";
import TestButton from "./components/TestButton";
import TestScreen from "./components/TestScreen";
import { STOPS } from "./config/trail";

export default function App() {
  useWakeLock();
  const { progress, update } = useProgress();
  const [showTest, setShowTest] = useState(false);
  const [previewPuzzle, setPreviewPuzzle] = useState(null);
  const { screen, currentStopIndex, debugMode, testStopMode } = progress;
  const routeStops = useMemo(
    () => (testStopMode ? STOPS : STOPS.filter((stop) => !stop.testStop)),
    [testStopMode],
  );

  const handlePinSuccess = useCallback((mode) => {
    update({
      pinVerified: true,
      screen: "welcome",
      debugMode: mode === "debug" || mode === "test",
      testStopMode: mode === "test",
      currentStopIndex: 0,
    });
  }, [update]);

  const handleStart = useCallback(() => {
    update({ welcomeSeen: true, screen: "navigate" });
  }, [update]);

  const handleArrived = useCallback(() => {
    const isFinal = routeStops[currentStopIndex]?.isFinal;
    update({ screen: isFinal ? "final" : "arrival" });
  }, [update, currentStopIndex, routeStops]);

  const handleStartPuzzle = useCallback(() => {
    update({ screen: "puzzle" });
  }, [update]);

  const handleBackToArrival = useCallback(() => {
    update({ screen: "arrival" });
  }, [update]);

  const handleSolved = useCallback(() => {
    update({ screen: "stopComplete" });
  }, [update]);

  const handleNextStop = useCallback(() => {
    const nextIndex = currentStopIndex + 1;
    if (nextIndex < routeStops.length) {
      update({ currentStopIndex: nextIndex, screen: "navigate" });
    }
  }, [update, currentStopIndex, routeStops]);

  useEffect(() => {
    const stopScreens = ["navigate", "arrival", "puzzle", "stopComplete"];
    if (stopScreens.includes(screen) && currentStopIndex >= routeStops.length) {
      update({ screen: "final" });
    }
  }, [screen, currentStopIndex, routeStops.length, update]);

  const validStop = currentStopIndex < routeStops.length;

  let content = null;
  if (screen === "pin") content = <PinScreen onSuccess={handlePinSuccess} />;
  else if (screen === "welcome") content = <WelcomeScreen onStart={handleStart} />;
  else if (screen === "navigate" && validStop)
    content = <NavigationScreen stopIndex={currentStopIndex} stops={routeStops} onArrived={handleArrived} debugMode={debugMode} />;
  else if (screen === "arrival" && validStop)
    content = <ArrivalScreen stopIndex={currentStopIndex} stops={routeStops} onStart={handleStartPuzzle} />;
  else if (screen === "puzzle" && validStop)
    content = (
      <PuzzleScreen
        stopIndex={currentStopIndex}
        stops={routeStops}
        onSolved={handleSolved}
        onBack={handleBackToArrival}
        debugMode={debugMode}
      />
    );
  else if (screen === "stopComplete" && validStop)
    content = <StopCompleteScreen stopIndex={currentStopIndex} stops={routeStops} onNext={handleNextStop} />;
  else if (screen === "final")
    content = <FinalScreen stops={routeStops} />;

  const mainContent = previewPuzzle ? (
    <PuzzleScreen
      overridePuzzle={previewPuzzle}
      onSolved={() => setPreviewPuzzle(null)}
      onClose={() => setPreviewPuzzle(null)}
    />
  ) : content;

  const showSkip = debugMode && screen === "navigate";

  function handleTestSelectStop(index) {
    update({ currentStopIndex: index, screen: "navigate" });
    setShowTest(false);
  }

  return (
    <>
      <RefreshButton />
      <ResetButton />
      {/* <TipsButton /> */}
      {showSkip && validStop && (
        <FwButton onFw={handleArrived} />
      )}
      {debugMode && <TestButton onClick={() => setShowTest(true)} />}
      {showTest && (
        <TestScreen
          stops={routeStops}
          onSelectStop={handleTestSelectStop}
          onClose={() => setShowTest(false)}
        />
      )}
      {mainContent}
      {debugMode && (
        <div className="debug-footer">
          {screen === "navigate" && validStop ? (
            <a
              className="debug-maps-link"
              href={`https://maps.google.com/?q=${routeStops[currentStopIndex].lat},${routeStops[currentStopIndex].lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🗺 Google Maps
            </a>
          ) : (
            <span />
          )}
          <span className="debug-build">build {__BUILD_TIME__}</span>
        </div>
      )}
    </>
  );
}
