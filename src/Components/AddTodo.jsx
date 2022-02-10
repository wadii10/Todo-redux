import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import './AddTodo.css'

const AddTodo = () => {

    
  const [text, setText] = useState("");

    const dispatch = useDispatch() ;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAction = {
            id: Math.random(),
            action: text ,
            isDone: false
        };
        dispatch(addTask(newAction));
        setText("");
    };

  return <div className='input' >
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='what you will do ?' value={text} onChange={e=>setText(e.target.value)} />
      <button className='btn' type="submit" >Add</button>
    </form>
  </div>;
};

export default AddTodo;
