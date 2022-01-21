import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Countdown() {
  const [stop, setStop] = useState(true);
  const [isCountDone, setIsCountDone] = useState(false);
  const [num, setNum] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (!stop) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setStop(true);
            setIsCountDone(true);
            setIsCountDone(false);
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
    setNum(e.target.value);
    setMinutes(e.target.value);
  };

  const handleReset = () => {
    setStop(true);
    setNum("");
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <>
      <div className="countdown-container">
        <h2>抽獎時間</h2>
        <div className="timer-setting">
          <div>
            <input
              type="number"
              min="1"
              step="1"
              value={minutes}
              onChange={handleSetDrawTime}
              disabled={stop ? false : true}
            ></input>
            <label>分鐘</label>
          </div>
          {stop ? (
            <div className="set-button" onClick={() => setStop(false)}>
              Draw
            </div>
          ) : (
            <div className="stop-button" onClick={handleReset}>
              Reset
            </div>
          )}
        </div>

        <div className="time">
          {minutes === 0 && seconds === 0 ? (
            <h1>00:00</h1>
          ) : (
            <h1>
              {" "}
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
