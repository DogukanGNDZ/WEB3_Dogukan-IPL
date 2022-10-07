import Button from "Components/Button/Button";
import Statistic from "Components/Statistic/Statistic";
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToValueGood = (newValue) => {
    console.log("value now", newValue);
    setGood(newValue);
  };

  const setToValueNeutral = (newValue) => {
    console.log("neutral now", newValue);
    setNeutral(newValue);
  };

  const setToValueBad = (newValue) => {
    console.log("bad value now", newValue);
    setBad(newValue);
  };

  let value = false;

  if (good > 0 || neutral > 0 || bad > 0) value = true;

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setToValueGood(good + 1)} text="good" />
      <Button
        handleClick={() => setToValueNeutral(neutral + 1)}
        text="neutral"
      />
      <Button handleClick={() => setToValueBad(bad + 1)} text="bad" />
      <h1>Statistic</h1>
      {value ? (
        <Statistic good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
