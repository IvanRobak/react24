import React from 'react';

const ToDo = () => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input className="form-check-input me-2" type="checkbox" />
        </div>
        <div className="col">
          <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
      </div>
    </li>
  );
};

export default ToDo;
