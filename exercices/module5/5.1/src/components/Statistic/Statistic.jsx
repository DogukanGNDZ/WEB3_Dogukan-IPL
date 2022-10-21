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
      </table>
    </div>
  );
};
export default Statistic;
