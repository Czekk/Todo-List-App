import React, {Component} from 'react';

const task = (probs) => {
return (
    <div>
        <input type= 'text' 
        onClick= {probs.editTitle} 
        value={probs.title}/>
        <input type= 'text'
        onClick= {probs.editDesc} 
        value={probs.desc}/>
        
        <button onClick = {probs.delete}>delete</button>
        <input type = "checkBox" title="mark as completed"></input>
    </div>
);
}

export default task;