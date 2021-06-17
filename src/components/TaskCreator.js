//Component to create tasks
import React, { useState } from "react";

export const TaskCreator = (props) => {
  //defining state of new tasks
  const [newTaskName, setNewTaskName] = useState("");

  //function to update the state os new task name
  const update = (e) => setNewTaskName(e.target.value);

  //function to create
  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={update}
      />
      <button
        className="btn btn-primary mt-1 text-center"
        onClick={createNewTask}
      >
        Add New task
      </button>
    </div>
  );
};
