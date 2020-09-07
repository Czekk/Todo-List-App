import React, {Component} from 'react';
import './Task.css';

const task = (probs) => {
return (
    <div className = 'grid-container'>
        <div className='main'> 
            <input type='text' onChange= {probs.editTitle} value= {probs.title} placeholder='Title'/> <br/>
            <textarea type='text' onChange= {probs.editDesc} value= {probs.desc} placeholder='Description'/> 
        </div>
        <div className= 'side'>
            <label>Date: </label>
            <input type='date' onChange={probs.editDate} value= {probs.date}/><br/>
            <label>Time: </label>
            <input type='time' onChange= {probs.editTime} value= {probs.time}/>
        </div>
        <div className='util'>
            <label className='checker'>complete</label>
            <input className='checker' type = "checkBox" title="mark as completed"/><br/>
            <button id='delButton' onClick = {probs.delete} title= 'Delete task'>X</button> 
        </div> 
    </div>
);
}

export default task;