import { Context as counterContext } from "contexts/counterContext";
import { useContext } from "react";

const ButtonGood = () => {
  const {
    good,
    setToValueGood,
    neutral,
    setToValueNeutral,
    bad,
    setToValueBad,
    setTo0,
  } = useContext(counterContext);
  return (
    <>
      <p>{good}</p>
      <button onClick={() => setToValueGood(good + 1)}>neutral</button>
    </>
  );
};
export default ButtonGood;
