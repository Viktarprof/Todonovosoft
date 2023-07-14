import s from './TodoContainer.module.css'
import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';

function TodoContainer() {
  const todos = useSelector((state) => state.todo);

  const sortedTodos = todos.sort((a, b) => {
    if (a.done && !b.done) {
      return 1;
    } else if (!a.done && b.done) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <section className={s.todoList}>
      {sortedTodos.map((el,index) => (
        <Todo key={el.id} todo={el} index={index}/>
      ))}
    </section>
  );
}

export default TodoContainer;
