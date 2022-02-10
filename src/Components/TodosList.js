import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodosList = () => {

  const {todos}  = useSelector( (state) => state);
  
  return <div>
      {
          React.Children.toArray( todos.map( el => <TodoItem task={el} />) )
      }
  </div>;
};

export default TodosList;
