import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";

import "./Task.css";

const Task = ({ task, handleTaskCLick, handleTaskRemove }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid #6ed9e7" } : {}}
    >
      <div className={"task-title"} onClick={() => handleTaskCLick(task.id)}>
        {task.title}
      </div>
      <div className="button-container">
        <button
          className="remove-task-button"
          onClick={() => {
            handleTaskRemove(task.id);
          }}
        >
          <CgClose />
        </button>
        <button className="see-task-details-button">
          <CgInfo />
        </button>
      </div>
    </div>
  );
  // <div className="task-container">{task.title}</div>;
};

export default Task;
