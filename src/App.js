import React, {Component} from 'react';
import Task from './Components/Tasks/Task/Task';
import Tasks from './Components/Tasks/Tasks';
import Header from './Components/Header/Header';

class App extends Component {
  state= {
    tasks: [
    ]
  }

  addNewTaskHandler =() =>{
    const tasks = this.state.tasks;
    const NewTask= {
      title: null,
      description: null,
      date: null,
      time: null,
      priority: null,
      id: tasks.length
    };
    tasks.push(NewTask);
    this.setState({tasks: tasks});
  }
  deleteTaskHandler =(taskIndex) =>{
    const tasks =this.state.tasks;
    tasks.splice(tasks[taskIndex],1);
    this.setState({tasks: tasks});
  }
  render() {
    let tasks = null;
      tasks = (
      <div>
          <Tasks
             tasks= {this.state.tasks}
             delete= {this.deleteTaskHandler}
             />

      </div>
      );
    
    return (
      <div className="App">
        <Header clicked= {this.addNewTaskHandler}/>
           {tasks}
      </div>
    );
  }
  
}

export default App;
