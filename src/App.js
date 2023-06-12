import React, { useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterSlice } from './store.jsx';
export default function App() {
  const counter = useSelector((state) => {
    return state.crud;
  });
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  function handleClick(e) {
    setValue(e.target.value);
    dispatch(counterSlice.actions.onstore(value));
  }
  function handleDelete(index){
    dispatch(counterSlice.actions.onDelete(index));
  }
  function handleUpdate(index){
    dispatch(counterSlice.actions.onUpdate({index,value}));
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      {counter.map((e,index) => (
       <>
        <div>{e}</div>
        <button onClick={()=>handleDelete(index)}>Delete</button>
        <button onClick={()=>handleUpdate(index)}>Update</button>
       </>
      ))}
    </div>
  );
}
