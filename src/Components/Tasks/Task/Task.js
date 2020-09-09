import React from 'react';
import './Task.css';

const task = (probs) => {
return (
    <div className = 'grid-container'>
        <div className='main'> 
            <input type='text' onChange= {probs.edit} value= {probs.title} placeholder='Title' name='title'/> <br/>
            <textarea type='text' onChange= {probs.edit} value= {probs.desc} placeholder='Description' name='desc'/> 
        </div>
        <div className= 'side'>
            <label>Date: </label>
            <input type='date' onChange={probs.edit} value= {probs.date} name='date'/><br/>
            <label>Time: </label>
            <input type='time' onChange= {probs.edit} value= {probs.time} name='time'/>
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