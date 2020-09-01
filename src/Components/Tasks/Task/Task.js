import React, {Component} from 'react';
import './Task.css';

const task = (probs) => {
return (
    <div className = 'grid-container'>
        <div className='main'> 
            <input type='text' onClick= {probs.editTitle} value= {probs.title}/>
            <textarea type='text' onClick= {probs.editDesc} value= {probs.desc}/> 
        </div>
        <div className= 'side'>
            <input type='date'value= {probs.date} />
            <input type='time' value= {probs.time}/>
        </div>
        <div className='util'>
            <label className='checker'>complete</label>
            <input className='checker' type = "checkBox" title="mark as completed"/><br/>
            <button id='delButton' onClick = {probs.delete}>X</button> 
        </div> 
    </div>
);
}

export default task;