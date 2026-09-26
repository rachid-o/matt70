import { STOPS } from "../config/trail";

const TEST_PUZZLES = [];

export default function TestScreen({ stops = STOPS, onSelectStop, onClose }) {
  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="confirm-dialog test-screen-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>Testpagina</h3>
        <p className="test-screen-hint">Kies een locatie om naartoe te navigeren</p>
        <ul className="test-stop-list">
          {stops.map((stop, index) => (
            <li key={index}>
              <button className="test-stop-btn" onClick={() => onSelectStop(index)}>
                <span className="test-stop-num">{index + 1}</span>
                <span className="test-stop-name">{stop.name}</span>
                <span className="test-stop-radius">{stop.arrivalRadius} m</span>
              </button>
            </li>
          ))}
        </ul>

<button className="btn-secondary" onClick={onClose}>Sluiten</button>
      </div>
    </div>
  );
}
