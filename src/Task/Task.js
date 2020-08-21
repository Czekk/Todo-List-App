import React, {Component} from 'react';

const task = (probs) => {
return (
    <div> 
        <h3>{probs.title}</h3>
        <p>{probs.desc}</p>
        <button onClick = {probs.delete}>delete</button>
        <button OnClick = {probs.edit}>edit</button>
        <input type = "checkBox" title="mark as completed"></input>
    </div>
);
}

export default task;