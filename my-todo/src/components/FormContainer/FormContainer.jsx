import React, { useEffect } from 'react';
import s from './FormContainer.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { addNewTodoAction } from '../store/todoRedusers';
import { useDispatch, useSelector } from 'react-redux';


function FormContainer() {
  const dispatch = useDispatch(); 
  let cartTodo = useSelector(store => store.todo);

  useEffect(()=>{
    localStorage.setItem('cartTodo', JSON.stringify(cartTodo))
  }, [cartTodo])

  const addTask = (event) => {
    event.preventDefault();
    const description = event.target.elements.description.value;
    const newTask = {
      id: Date.now(),
      description: description,
      done: false
    };

    dispatch(addNewTodoAction(newTask));
    console.log(newTask);
    event.target.reset();
  };

  return (
    <form className={s.formContainer} onSubmit={addTask}>
      <Input
      placeholder={'Your todo task'} 
      type={'text'} 
      name='description'
      />

      <Button text={'Add task'} styles={'btnAdd'} />
    </form>
  );
}

export default FormContainer;
