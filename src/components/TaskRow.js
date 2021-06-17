//Component to generate multiple <tr>
import React from "react";

export const TaskRow = (props) => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toogleTask(props.task)}
      />
    </td>
  </tr>
);
