import React from 'react';
import { Link } from 'react-router-dom';
const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          />
          <Link to={todo.id}>{todo.title}</Link>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(todo.id)}
            disabled={!todo.completed}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default ToDo;
