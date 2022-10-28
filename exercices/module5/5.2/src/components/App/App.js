import Opinion from "components/Opinion/opinion";
import { Context as opinionContext } from "contexts/OpinionContexts";
import { useContext } from "react";
function App() {
  const { sortedOpinion } = useContext(opinionContext);
  {
    console.log(sortedOpinion());
  }
  return (
    <>
      {sortedOpinion().map((op) => {
        <p>{op.opinion}</p>;
      })}
    </>
  );
}

export default App;
