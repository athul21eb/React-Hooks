import { useState, useEffect } from "react";

export default function UseEffectExample() {
  let [Width, setWidth] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
    console.log("event triggered");

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      });
      console.log("removed");
    };
  }, []);

  useEffect(()=>{
    document.title = `Size: ${height} x ${Width}`
  },[Width,height])
  return (
    <div>
      Width: {Width}px
      <br />
      Height:{height}px
    </div>
  );
}
