import { Context as counterContext } from "contexts/counterContext";
import { useContext } from "react";

const ButtonReset = () => {
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
      <button onClick={() => setTo0()}>reset</button>
    </>
  );
};
export default ButtonReset;
