import React from'react';


const TaskForm = (probs)=> {
   return( 
        <div>
            <label>Title:</label>
            <input type='text' onChange= {probs.titleChange} size ='80' required/> <br/>
            <label>Description:</label>
            <textarea type= 'text' onChange={probs.descChange} size= '500' required/><br/>
            <input type= 'date' min ={Date()} onChange={probs.dateChange}/> <br/>
            <input type= 'time' onChange= {probs.timeChange}/><br/>
            <input type= 'radio'/><br/>
            <button onClick = {probs.cancel}>Cancel</button>
            <button onClick = {probs.done}>Done</button>
        </div>
    );
}

export default TaskForm;
