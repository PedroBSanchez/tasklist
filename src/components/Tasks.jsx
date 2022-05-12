import React from "react";

import Task from "./Task";

const tasks = ({ tasks, handleTaskCLick, handleTaskRemove }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskCLick={handleTaskCLick}
          handleTaskRemove={handleTaskRemove}
        />
      ))}
    </div>
  );
};

export default tasks;
