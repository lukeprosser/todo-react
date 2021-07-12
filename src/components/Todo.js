import React from 'react';

export default function Todo(props) {
  const { id, name, completed } = props;
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={id} type="checkbox" defaultChecked={completed} />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}