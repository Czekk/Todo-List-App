import React from 'react';
import './Header.css';

const header = (probs)=> {
   return (
    <div className='headerCon'>
        <h1>Todo List</h1>
        <h4>'Plan Ahead!'</h4>
        <button id='addTaskButton' onClick= {probs.clicked}>+</button>
    </div>
   );
}
export default header;