import { useState } from "react";
import { STOPS } from "../config/trail";
import { catUrlForStop } from "../utils/catPhotos";

export default function StopCompleteScreen({ stopIndex, stops = STOPS, onNext }) {
  const [catImageOpen, setCatImageOpen] = useState(false);
  const stop = stops[stopIndex];
  const catUrl = stop.showCat ? catUrlForStop(stopIndex) : null;

  return (
    <div className="screen stop-complete-screen">
      <h2>{stop.completeMessage}</h2>

      {catUrl && (
        <button
          type="button"
          className="cat-reward"
          onClick={() => setCatImageOpen(true)}
          aria-label="Kattenfoto vergroten"
        >
          <img src={catUrl} alt="Een lieve kat voor jullie" className="cat-reward-image" />
        </button>
      )}

      {catImageOpen && (
        <div className="po-lightbox" onClick={() => setCatImageOpen(false)}>
          <button
            className="po-lightbox-close"
            type="button"
            onClick={() => setCatImageOpen(false)}
            aria-label="Foto sluiten"
          >
            ✕
          </button>
          <img src={catUrl} alt="Een lieve kat voor jullie" className="po-lightbox-img" />
        </div>
      )}

      <div className="progress-dots">
        {stops.map((_, i) => (
          <div key={i} className={`progress-dot ${i <= stopIndex ? "done" : ""}`} />
        ))}
      </div>

      <button className="btn-primary" onClick={onNext}>
        {"Volgende stop →"}
      </button>
    </div>
  );
}
