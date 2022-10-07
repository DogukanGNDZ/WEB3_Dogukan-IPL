import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text} </td>
        <td>{props.val}</td>
      </tr>
    </tbody>
  );
};
export default StatisticLine;
