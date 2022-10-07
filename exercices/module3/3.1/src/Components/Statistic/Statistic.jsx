import StatisticLine from "./StatisticLine";

const Statistic = (props) => {
  let good = props.good;
  let bad = props.bad;
  let neutral = props.neutral;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Statistic</th>
          </tr>
        </thead>
        <StatisticLine text="good" val={good} />
        <StatisticLine text="neutral" val={neutral} />
        <StatisticLine text="bad" val={bad} />
        <StatisticLine text="all" val={good + neutral + bad} />
        <StatisticLine
          text="average"
          val={(good * 1 + bad * -1) / (good + bad + neutral)}
        />
        <StatisticLine
          text="positive"
          val={(good / (good + neutral + bad)) * 100}
        />
      </table>
    </div>
  );
};
export default Statistic;
