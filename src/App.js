import React, {Component} from 'react';
import Task from './Task/Task';
import TaskForm from './TaskForm/TaskForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    tasks: [
      {title: 'Finish this app', description: 'this need work done'},
      {title: 'Shopping', description: 'Grocery, and clothes'}
    ],
    showTaskForm: false
  }

  let NewTask = {
    title: null,
    description: null,
    date: null,
    time: null
  }

  showTaskFormHandler = (event)=>{
    this.setState(
      {showTaskForm: true}
    )
  }

  cancelHandler = () =>{
    this.setState(
      {showTaskForm: false}
    );
  }

  addNewTaskHandler =() =>{

  }
  render() {
    let tasks = null;
    let taskForm = null;
    if(this.state.showTaskForm){
        taskForm= (<TaskForm 
                  cancel= {this.cancelHandler}
                  done= {this.addNewTaskHandler}
                  />
                  );
    } 
    else {
      tasks = (
      <div>
        {this.state.tasks.map(task => {
          return (
            <Task title= {task.title} desc= {task.description} />
          ) 
          })
        }
        <button onClick= {this.showTaskFormHandler}> Add new task </button>
      </div>
      );
    }
    
    

    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
          <h4>'Plan Ahead!'</h4>
        </header>

        <body>
           {tasks}
           {taskForm}
           
        </body>
      </div>
    );
  }
  
}

export default App;
