import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  const increment = (n) => setCount(count + n); //
  const decrement = (n) => setCount(count - n);
  const resetCount = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div class="btn-group">
        <Button
          className="btn-decrease"
          content="DECREASE10"
          fn={() => decrement(10)}
        />
        <Button
          className="btn-decrease"
          content="DECREASE"
          fn={() => decrement(1)}
        />
        <Button
          className="btn-reset"
          content="RESET"
          fn={() => resetCount(0)}
        />
        <Button
          className="btn-increase"
          content="INCREASE"
          fn={() => increment(1)}
        />
        <Button
          className="btn-increase"
          content="INCREASE10"
          fn={() => increment(10)}
        />
      </div>
    </div>
  );
}
export default App;
