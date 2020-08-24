import React from'react';
import './TaskForm.css';


const TaskForm = (probs)=> {
   return( 
        <div className='formContainer'>
            <label>Title:</label><br/>
            <input type='text' onChange= {probs.titleChange} size ='80' required/> <br/>

            <label>Description:</label><br/>
            <textarea type= 'text' onChange={probs.descChange} size= '500' required/><br/>
            
            <label>Date:</label><br/>
            <input type= 'date' min ={Date()} onChange={probs.dateChange}/> <br/>
            
            <label>Time:</label><br/>
            <input type= 'time' onChange= {probs.timeChange}/><br/>
            
            <label>Priority:</label><br/>
            <input type= 'radio' /> <br/>
            <button className= 'cancelBut' onClick = {probs.cancel}>Cancel </button>
            <button className='doneBut' onClick = {probs.done}>Done</button>
        </div>
    );
}

export default TaskForm;
