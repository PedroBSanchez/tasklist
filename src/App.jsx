import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import Modal from "./components/Modal";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [modal, setModalOpen] = useState(false);

  const handleGet = async () => {
    const { data } = await axios.get(
      `https://crudcrud.com/api/08425ced6803483fb4adec70f7263406/tasks`
    );
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    handleGet();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task._id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    // Fazer put levando taskId como parâmetro de requisição e mandando true no completed, após é só mandar o handleGet()
    // ALTERAR o handleTaskClick para recer a task e não apenas o taskId
    setTasks(newTasks);
  };

  const handleTaskClickAddition = () => {
    setModalOpen(!modal);
  };

  const handleTaskAddition = (taskTitle, taskDescription) => {
    axios
      .post(`https://crudcrud.com/api/08425ced6803483fb4adec70f7263406/tasks`, {
        title: taskTitle,
        description: taskDescription,
        completed: false,
      })
      .then((res) => {
        handleGet();
      })
      .catch((error) => {
        alert("Ocorreu um problema" + error);
      });
  };

  const handleTaskDeletion = (taskId) => {
    // Apenas fazer o delete com o Id que já está sendo passado

    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      {modal && (
        <Modal
          setModalOpen={setModalOpen}
          handleTaskAddition={handleTaskAddition}
        />
      )}
      <div className="container">
        <Header />
        <hr className="hr" />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskClickAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
