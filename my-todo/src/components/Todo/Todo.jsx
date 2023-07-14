import React from 'react';
import s from './Todo.module.css'
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { 
  changeDoneAction, 
  deleteTodoAction, 
  editTodoAction } from '../store/todoRedusers';

function Todo({ index, todo }) {
  const dispatch = useDispatch();

  const task_styles = {
    backgroundColor: todo.done ? '#7bed9f' : '#dfe4ea'};
  
  const btnDone = todo.done ? "DONE" : "NOT DONE";    
  

  const deleteCart = () => {
    dispatch(deleteTodoAction(todo.id));
  };

  const changeDone = () => {
    dispatch(changeDoneAction(todo.id));
  };

  const editText = () => {
    const newDescription = prompt('Исправить карточку?', todo.description);
    if (newDescription){
      dispatch(editTodoAction({ id: todo.id, description: newDescription }))
    }
  }

  return (
    <div  className={s.task} style={task_styles}>
     <span> {index + 1 }.</span>
      <p onDoubleClick={editText}>{todo.description}</p>
      <Button 
        onClick={changeDone} 
        text={btnDone} 
        styles={'btnDone'}/>
      <Button 
        onClick={deleteCart} 
        text={'X'} 
        styles={'btnClose'} />
    </div>
  );
}

export default Todo;
