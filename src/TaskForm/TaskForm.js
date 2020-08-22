import React from'react';


const TaskForm = (probs)=> {
   return( 
        <div>
            <label>Title:</label>
            <input type='text' onChange='titleChange' size ='80' required/>
            <label>Description:</label>
            <input type= 'text' onchange='descChange' size= '500' required/>
            <input type= 'date' min ={Date() onChange='dateChange'} />
            <input type= 'time' onchange= 'timeChange'/>
            <input type= 'radioButton'>
            <button onClick = {probs.cancel}>Cancel</button>
            <button onClick = {probs.done}>Done</button>
        </div>
    );
}

export default TaskForm;
