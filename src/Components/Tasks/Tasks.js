import React from 'react';
import Task from './Task/Task';

const tasks = (probs) => {
    <div>
        {this.state.tasks.map(task => {
          return (
            <Task title= {task.title} 
            desc= {task.description} 
            delete= {this.deleteTaskHandler}
            date= {task.date}
            time= {task.time}
            id = {task.id} />
          ) 
          })
        }
        <button onClick= {this.showTaskFormHandler}> Add new task </button>
      </div>

}

export default tasks;