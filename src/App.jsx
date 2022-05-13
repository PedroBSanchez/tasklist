import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks";

const App = () => {
  //  message = "Hello world!!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskCLick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header>Minhas tarefas</Header>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskCLick={handleTaskCLick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
