import React from 'react';
import Task from './Task/Task';

const tasks = (probs) => probs.tasks.map((task, index) => {
          return (
            <Task title= {task.title}
            edit={(event)=>probs.change(event, index)}
            desc= {task.desc}                     
            date= {task.date}            
            time= {task.time}            
            key = {task.id}
            delete= {() => probs.delete(index)}
            completeTaskHandler={completeTaskHandler} />
          ) 
          });
       
          const completeTaskHandler=() => {
            document.getElementById("toStrike").style.textDecoration= "line-through";
        }
        
export default tasks;