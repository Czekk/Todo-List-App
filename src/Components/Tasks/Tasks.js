import React from 'react';
import Task from './Task/Task';
import './Tasks.css';

const tasks = (probs) => probs.tasks.map((task, index) => {
          return (
            <Task title= {task.title}
            edit={(event)=>probs.change(event, index)}
            desc= {task.description}                     
            date= {task.date}            
            time= {task.time}            
            key = {task.id}
            delete= {() => probs.delete(index)} />
          ) 
          });

export default tasks;