import React from 'react';
import classes from './ToDo.module.css';
import { Button } from '../button/Button';


/*const ToDo = ({task, handleDelete}) => {
    return (
        <li className={classes.task}>
            <p>id: {task.id}</p>
            <p>title: {task.title}</p>
            <Button text={'delete'} onClick={()=>handleDelete(task.id)}/>
        </li>
    );
};

export default ToDo;*/
//дз
const ToDo = ({ task ,handleDelete, todos, setTodos }) => {
 /* const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };*/

  return (
    <li className={classes.task}>
      <p>id: {task.id}</p>
      <p>title: {task.title}</p>
      <Button text={'delete'} onClick={() => handleDelete(task.id)} />
    </li>
  );
};

export default ToDo;



/*const ToDo = ({ task, todos, setTodos, classes }) => {
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <li className={classes.task}>
      <p>id: {task.id}</p>
      <p>title: {task.title}</p>
      <Button text={'delete'} onClick={() => handleDelete(task.id)} />
    </li>
  );
};*/