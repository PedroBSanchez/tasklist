import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskCLick, handleTaskRemove }) => {
  const history = useHistory();

  const handleTaskDetailsClick = (string) => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "15px solid #6ed9e7" } : {}}
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
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
  // <div className="task-container">{task.title}</div>;
};

export default Task;
