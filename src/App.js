import React, {Component} from 'react';
import Task from './Task/Task';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    tasks: [
      {title: 'Finish this app', description: 'this need work done'},
      {title: 'Shopping', description: 'Grocery, and clothes'}
    ]
  }
  render() {
    let tasks = "Nothing Here!";
    tasks = (
      this.state.tasks.map(task =>{
        return <Task title= {task.title} desc= {task.description}/>
      })
    );
    

    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
          <h4>'Plan Ahead!'</h4>
        </header>

        <body>
          <div>
          {tasks}

          </div>
          <button>add new task</button>
        </body>
      </div>
    );
  }
  
}

export default App;
