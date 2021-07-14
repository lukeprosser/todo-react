import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Todo from './components/Todo';

function App(props) {
  const [ tasks, setTasks ] = useState(props.tasks);
  const taskText = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${taskText} remaining`;
  const taskList = tasks.map(task => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} toggleTaskCompleted={toggleTaskCompleted} />
  ));

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false };
    setTasks([ ...tasks, newTask ]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
