import { useState, useRef } from "react";


export default function TimerWithRef() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(new Date());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(new Date());
    });
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let time = 0;
  if(startTime && now) {
    time = (now - startTime) / 1000;
  }
  
  return (
    <div>
      <h2>Timer with useRef</h2>
      <p>tiempo {time}</p>
      <button onClick={handleStart}>Comenzar</button>
      <button onClick={handleStop}>Detener</button>
    </div>
  )
}