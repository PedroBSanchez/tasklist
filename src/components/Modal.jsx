import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
//import { useState } from "react/cjs/react.production.min";

import "./Modal.css";

const Modal = ({ setModalOpen, handleTaskAddition }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInputTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePost = () => {
    handleTaskAddition(title, description);
    setModalOpen(false);
  };

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="title-container">
            <div className="title">
              <h2>Adicionar Tarefa</h2>
            </div>
            <div className="closeModalButtonContainer">
              <button
                className="closeModalButton"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                <CgClose />
              </button>
            </div>
          </div>
          <div className="body">
            <div className="name-field">
              <label className="label">Title:</label>
              <input
                onChange={handleInputTitleChange}
                value={title}
                className="input"
                type="text"
              />
            </div>
            <div className="description-field">
              <label className="label">Description:</label>
              <textarea
                onChange={handleInputDescriptionChange}
                value={description}
                className="input textarea"
              />
            </div>
          </div>
          <div className="footer">
            <button
              className="button cancel"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Cancelar
            </button>
            <button className="button add" onClick={handlePost}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
