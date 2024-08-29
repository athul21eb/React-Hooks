import { useState, useEffect, useRef } from "react";
import "./s.css";
function StopWatch() {
  let [isRunning, setIsRunning] = useState(false);
  let [elaspedTime, setElaspedTime] = useState(0);
  let startingTime = useRef(0);
  let intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
        intervalRef.current =  setInterval(() => {
         setElaspedTime(Date.now() - startingTime.current);
      }, 10);
    }else {
        clearInterval(intervalRef.current);
      }
      

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);
  function start() {
    setIsRunning(true);
    startingTime.current = Date.now() - elaspedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setIsRunning(false);
    setElaspedTime(0);
  }
  function formatTime() {
    let minutes = Math.floor(elaspedTime /(1000 * 60)%60);
    let seconds = Math.floor(elaspedTime / (1000)%60);
    let milliseconds = Math.floor(elaspedTime%1000/10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  }
  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime()}</div>
    <div className="butt">  <button onClick={start}>Start</button>
      <button onClick={stop}> Stop</button>
      <button onClick={reset}>Reset</button></div>
    </div>
  );
}

export default StopWatch;
