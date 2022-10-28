import { Context as opinionContext } from "contexts/OpinionContexts";
import { useContext } from "react";

function Opinion() {
  const { opinion, opinionAttribute, setAOpinion } = useContext(opinionContext);
  return (
    <>
      <p>{}</p>
    </>
  );
}

export default Opinion;
