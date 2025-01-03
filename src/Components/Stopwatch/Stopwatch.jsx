import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const IntervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  const Style = {
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    /* Centers both horizontally and vertically */
    height: " 100%",
    width: "auto",
    borderRadius: "15px",
    boxShadow: "#f5f7f8",
    boxShadow: " 10px 1px 10px 5px hsla(200, 31%, 33%, 0.749)",
    margin: "20vh",
    background: " #1f3540",
  };

  useEffect(() => {
    if(isRunning){
      IntervalIdRef.current=  setInterval(()=>{
        setElapsedTime(Date.now()-startTimeRef.current)
        },10)

        return ()=>{
            clearInterval(IntervalIdRef.current)
        }
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false)
  }

  function formateTime() {


    let hours=Math.floor(elapsedTime/(1000*60*60))
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let seconds=Math.floor(elapsedTime/(1000)%60)
    let milliseconds=Math.floor(elapsedTime%1000/10)
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;


  }
  return (
    <div className="stopwatch" style={Style}>
      <div
        className="display"
        style={{ fontSize: "40px", fontFamily: "monospace" }}
      >
        {formateTime()}
      </div>
      <div className="controls">
        <Button name="start" onClick={start} />
        <Button name="stop" onClick={stop} />
        <Button name="reset" onClick={reset} />
      </div>
    </div>
  );
}
