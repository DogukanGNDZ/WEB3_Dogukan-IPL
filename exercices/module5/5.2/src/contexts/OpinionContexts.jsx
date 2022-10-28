import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinion, setOpinion] = useState([
    { opinion: "A", id: 0, vote: 1 },
    { opinion: "B", id: 1, vote: 2 },
  ]);
  const [opinionAttribute, setOpinionAttribute] = useState("");

  const setAOpinion = () => {
    const opinionObject = {
      opinion: opinionAttribute,
      id: uuidv4(),
      vote: 0,
    };
    setOpinion(opinionObject);
    setOpinionAttribute("");
  };

  const sortedOpinion = () => {
    let tabOp = [...opinion];
    console.log(tabOp);
    tabOp.sort((a, b) => a.vote - b.vote);
    return tabOp;
  };

  const exposedValue = {
    opinion,
    opinionAttribute,
    setAOpinion,
    sortedOpinion,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
