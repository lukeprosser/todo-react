import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const TASKS = [
  { id: "todo-1", name: "Eat", completed: true },
  { id: "todo-2", name: "Sleep", completed: false },
  { id: "todo-3", name: "Repeat", completed: false },
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById('root')
);
