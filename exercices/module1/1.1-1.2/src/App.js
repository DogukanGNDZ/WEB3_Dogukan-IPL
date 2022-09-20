
import Exercice from "components/exercice";
import Header from "components/Header";
import Total from "components/Total";


const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <p>
        <Header course={course} />
      </p>
      <Exercice part={part1} exo={exercises1} />
      <Exercice part={part2} exo={exercises2} />
      <Exercice part={part3} exo={exercises3} />
      <p>
        <Total count={exercises1 + exercises2 + exercises3} />
      </p>
    </div>
  );
};

export default App;
