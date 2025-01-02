import React, { useState } from "react";
import Button from "../Button/Button";
import "./Couter.css";

const Couter = () => {
  const [count, setCount] = useState(0);
  const Decrement = () => {
    setCount((preCount) => (preCount > 0 ? preCount - 1 : 0));
  };
  const Increment = () => setCount((preCount) => preCount + 1);
  const Reset = () => setCount(0);

  return (
    <div id="Counter">
      <p>{count}</p>
      <div className="buttons">
        <Button name="Decrement" onClick={Decrement} />
        <Button name="Increment" onClick={Increment} />
        <Button name="Reset" onClick={Reset} disabled={count === 0} />
      </div>
    </div>
  );
};

export default Couter;
