import { Context as counterContext } from "contexts/counterContext";
import { useContext } from "react";

const ButtonBad = () => {
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
      <p>{bad}</p>
      <button onClick={() => setToValueBad(bad + 1)}>neutral</button>
    </>
  );
};
export default ButtonBad;
