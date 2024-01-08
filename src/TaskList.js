import React from 'react';

const TaskList = ({ tasks, removeTask, toggleTaskStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskStatus(task.id)}
          />
          {task.text}
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
