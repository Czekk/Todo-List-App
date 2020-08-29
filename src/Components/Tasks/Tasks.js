import React from 'react';
import Task from './Task/Task';

const tasks = (probs) => {
    return (
        <div>
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
        <button onClick= {probs.onClick}> Add new task </button>
      </div>
    );
    

}

export default tasks;