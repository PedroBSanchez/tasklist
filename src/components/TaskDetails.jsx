import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = (apiUrl) => {
  const params = useParams();
  const history = useHistory();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleGetById = () => {
    console.log(apiUrl);
    axios.get(`${apiUrl}/tasks/${params.taskId}`).then((res) => {
      // jogar dados da response no title e description
      console.log(res.data);
    });
  };

  useEffect(() => {
    handleGetById();
  }, []);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default TaskDetails;
