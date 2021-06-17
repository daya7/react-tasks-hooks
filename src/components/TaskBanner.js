//Component to show the Banner: Name of user and number of tasks to do
import React from "react";

export const TaskBanner = (props) => (
  <h4 className="bg-primary text-white text-center p-5">
    {" "}
    {props.userName}'s Successful Task App-{" "}
    {props.taskItems.filter((t) => !t.done).length} (tasks to do){" "}
  </h4>
);
