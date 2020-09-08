import React from 'react';
import Task from './Task/Task';
import './Tasks.css';

const tasks = (probs) => {
    return (
        <div clasName='tasksCont'>          
        {probs.tasks.map((task, index) => {
          return (
            <Task title= {task.title}
            editTitle={()=>probs.changeTitle(index)}
            desc= {task.description} 
            delete= {() => probs.delete(index)}
            date= {task.date}
            time= {task.time}
            id = {task.id} />
          ) 
          })
        }               
      </div>
    );
    

}

export default tasks;