import React, { useState, useEffect } from "react";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  //defining state of user name
  const [userName, setUserName] = useState("D");
  //defining state of tasks
  const [taskItems, setTaskItems] = useState([
    { name: "Task one", done: false },
    { name: "Task two", done: false },
    { name: "Task three", done: true },
    { name: "Task four", done: false },
  ]);

  //defining the state of visibility of the completed tasks to the users
  const [showCompleted, setShowCompleted] = useState(true);

  //obtaining the tasks from localstorage
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("D example");
      setTaskItems([
        { name: "Task one example", done: false },
        { name: "Task two example", done: false },
        { name: "Task three example", done: true },
        { name: "Task four example", done: false },
      ]);
      setShowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  //functions

  //function to map taskRow Component
  const taskTableRow = (doneValue) => {
    return taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toogleTask={toogleTask} /> //Calling the component with props: task arr, key, and a function to handle the property done
      ));
  };

  //function to alternate the checkbox / property done
  const toogleTask = (task) => {
    return setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    ); // Compare the tasks and change the done property
  };

  //function to add a new task to the list of tasks
  const createT = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createT} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRow(false)}</tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={(checked) => setShowCompleted(checked)}
        />
      </div>
      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRow(true)}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
