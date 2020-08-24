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
        <p>{probs.date}</p>
        <p>{probs.time}</p>
        <p>{probs.id}</p>

        <button onClick = {probs.delete}>delete</button>
        <input type = "checkBox" title="mark as completed"></input>
    </div>
);
}

export default task;