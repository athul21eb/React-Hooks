import { useState, useEffect } from "react";
import "./digital.css";

export default function DigitalClock() {
  let [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 500);
  }, []);

  function ShowClock() {
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let meridium = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    return `${ParseZero(hours)}:${ParseZero(minutes)}:${ParseZero(
      seconds
    )}${meridium}`;
  }

  function ParseZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="clock-contianer">
      <div className="clock">
        <span>{ShowClock()}</span>
      </div>
    </div>
  );
}
