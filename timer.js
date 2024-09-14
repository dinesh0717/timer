import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  let n = 100;
  const [count, setCount] = useState(0);
  const [currentType, setCurrentType] = useState("");
  const countStart = (type) => {
    setCurrentType(type);
    if (currentType === "start") {
      setInterval(() => {
        setCount(count + 1);
      }, 1000);
    } else if (currentType === "resume") {
      setInterval(() => {
        setCount(count + 1);
      }, 1000);
    } else if (currentType === "stop") {
      setCount(count);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    if (count <= 100) {
      countStart(currentType);
    }
  }, [count]);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => countStart("start")}>Start</button>
      <button onClick={() => countStart("stop")}>Stop</button>
      <button onClick={() => countStart("resume")}>Resume</button>
      <button onClick={() => countStart("reset")}>Reset</button>
    </div>
  );
}
