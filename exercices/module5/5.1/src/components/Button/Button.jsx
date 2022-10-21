import { Context as counterContext } from "contexts/counterContext";
import { useContext } from "react";

const Button = () => {
  const { neutral, setToValueNeutral } = useContext(counterContext);
  return (
    <>
      <p>{neutral}</p>
      <button onClick={() => setToValueNeutral(neutral + 1)}>neutral</button>
    </>
  );
};
export default Button;
