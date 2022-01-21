import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Countdown() {
  const [stop, setStop] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (!stop && isTimeValid) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setStop(true);

            navigate("/result");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleSetDrawTime = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      setMinutes("");
    } else {
      setMinutes(parseInt(e.target.value));
    }
  };

  const handleReset = () => {
    setStop(true);
    setMinutes(0);
    setSeconds(0);
  };

  const handleErrorTimeData = () => {
    setMinutes(0);
  };

  useEffect(() => {
    if (minutes === "" || minutes < 0 || isNaN(minutes)) {
      setIsTimeValid(false);
    } else {
      setIsTimeValid(true);
    }
  }, [minutes]);

  return (
    <>
      <div className="countdown-container">
        <h2>Set time to draw a Pokemon</h2>
        <div className="timer-setting">
          <div>
            {isTimeValid ? (
              <input
                type="number"
                min="1"
                step="1"
                value={minutes}
                onChange={handleSetDrawTime}
                disabled={stop ? false : true}
              />
            ) : (
              <input
                className="error-input"
                type="number"
                min="1"
                step="1"
                value={minutes}
                onChange={handleSetDrawTime}
                disabled={stop ? false : true}
              />
            )}
            <label>minute(s)</label>
          </div>
          {stop ? (
            <div
              className="set-button"
              onClick={isTimeValid ? () => setStop(false) : handleErrorTimeData}
            >
              Draw
            </div>
          ) : (
            <div className="stop-button" onClick={handleReset}>
              Reset
            </div>
          )}
        </div>
        {!isTimeValid && (
          <span className="error-message">Please enter valid time data</span>
        )}

        <div className="time">
          {minutes < 0 || minutes === "" || isNaN(minutes) ? (
            <h1>00:00</h1>
          ) : (
            <h1>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
