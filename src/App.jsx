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
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [modal, setModalOpen] = useState(false);

  const apiUrl = "https://crudcrud.com/api/bed6651e3c764033a624f2c6a3d43eac";

  const handleGet = async () => {
    axios.get(`${apiUrl}/tasks`).then((res) => {
      setTasks(res.data);
    });
  };

  useEffect(() => {
    handleGet();
  }, []);

  const handleTaskClick = (taskId, task) => {
    const newTasks = tasks.map((task) => {
      if (task._id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    axios
      .put(`${apiUrl}/tasks/${taskId}`, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      })
      .catch((error) => {
        alert(`Resetar Api CrudCrud -> ${error}`);
      });

    setTasks(newTasks);
  };

  const handleTaskClickAddition = () => {
    setModalOpen(!modal);
  };

  const handleTaskAddition = (taskTitle, taskDescription) => {
    axios
      .post(`${apiUrl}/tasks`, {
        title: taskTitle,
        description: taskDescription,
        completed: false,
      })
      .then((res) => {
        handleGet();
      })
      .catch((error) => {
        alert("Resetar Api CrudCrud -> " + error);
      });
  };

  const handleTaskDeletion = (taskId) => {
    axios
      .delete(`${apiUrl}/tasks/${taskId}`)
      .then((res) => {
        handleGet();
      })
      .catch((error) => {
        alert(`Resetar api CrudCrud -> ${error}`);
      });
    // Apenas fazer o delete com o Id que já está sendo passado
    //const newTasks = tasks.filter((task) => task.id !== taskId);
    //setTasks(newTasks);
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
        <Route
          path="/:taskId"
          exact
          render={() => <TaskDetails apiUrl={apiUrl} />}
        />
      </div>
    </Router>
  );
};

export default App;
