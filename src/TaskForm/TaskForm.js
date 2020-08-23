import React from'react';


const TaskForm = (probs)=> {
   return( 
        <div>
            <label>Title:</label>
            <input type='text' onChange= {probs.titleChange} size ='80' required/>
            <label>Description:</label>
            <input type= 'text' onChange={probs.descChange} size= '500' required/>
            <input type= 'date' min ={Date()} onChange={probs.dateChange}/>
            <input type= 'time' onChange= {probs.timeChange}/>
            <input type= 'radio'/>
            <button onClick = {probs.cancel}>Cancel</button>
            <button onClick = {probs.done}>Done</button>
        </div>
    );
}

export default TaskForm;
