import Button from "components/Button/Button";
import ButtonBad from "components/Button/Buttonbad";
import ButtonGood from "components/Button/ButtonGood";
import ButtonReset from "components/Button/ButtonReset";
import { useContext, useState } from "react";

const App = () => {
  return (
    <>
      <h1>give feedback</h1>
      <Button />
      <ButtonGood />
      <ButtonBad />
      <ButtonReset />
    </>
  );
};

export default App;
