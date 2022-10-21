import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
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

  const setTo0 = () => {
    setBad(0);
    setGood(0);
    setNeutral(0);
  };

  const exposedValue = {
    good,
    setToValueGood,
    neutral,
    setToValueNeutral,
    bad,
    setToValueBad,
    setTo0,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
