import React from 'react';
import Task from './Task/Task';
import './Tasks.css';

const tasks = (probs) => {
    return (
        <div>
          <div clasName='tasksCont' >
        {probs.tasks.map(task => {
          return (
            <Task title= {task.title} 
            desc= {task.description} 
            delete= {probs.delete}
            date= {task.date}
            time= {task.time}
            id = {task.id} />
          ) 
          })
        }
        </div>
        <button id='addTaskButton' onClick= {probs.onClick}>+</button>
      </div>
    );
    

}

export default tasks;