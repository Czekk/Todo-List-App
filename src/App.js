import React, {Component} from 'react';
import Task from './Components/Tasks/Task/Task';
import Tasks from './Components/Tasks/Tasks';
import TaskForm from './Components/TaskForm/TaskForm';
import Header from './Components/Header/Header';

class App extends Component {
  state= {
    tasks: [
    ],
    showTaskForm: false
  }

  NewTask = {
    title: null,
    description: null,
    date: null,
    time: null,
    priority: null,
    id: null
  }

  showTaskFormHandler = (event)=>{
    this.setState(
      {showTaskForm: true}
    )
  }
//methods for TaskForm
  titileChangeHandler=(event)=>{
    this.NewTask.title= event.target.value;
  }
  descChangeHandler=(event)=>{
    this.NewTask.description= event.target.value;
  }
  dateChangeHandler=(event)=>{
    this.NewTask.date= event.target.value;
  }
  timeChangeHandler=(event)=>{
    this.NewTask.time= event.target.value;
  }
  cancelHandler = () =>{
    this.setState(
      {showTaskForm: false}
    );
  }

  addNewTaskHandler =() =>{
    const tasks = this.state.tasks;
    tasks.push(this.NewTask);
    const taskIndex = tasks.findIndex(task => {
      return task.title === this.NewTask.title});
    tasks[taskIndex].id= taskIndex;
    this.setState({Tasks: tasks});
    this.NewTask= {
      title: null,
      description: null,
      date: null,
      time: null,
      priority: null,
      id: null
    };
    this.setState(
      {showTaskForm: false}
    );
  }
  render() {
    let tasks = null;
    let taskForm = null;
    if(this.state.showTaskForm){
        taskForm= (<TaskForm
                  titleChange={(event)=>this.titileChangeHandler(event)}
                  descChange={(event)=>this.descChangeHandler(event)}
                  dateChange={(event)=>this.dateChangeHandler(event)}
                  timeChange={(event)=> this.timeChangeHandler(event)}
                  cancel= {this.cancelHandler}
                  done= {this.addNewTaskHandler}
                  />
                  );
    } 
    else {
      tasks = (
      <div>
          <Tasks
             tasks= {this.state.tasks}
             delete= {this.deleteTaskHandler}
             onClick= {this.showTaskFormHandler}
             />

      </div>
      );
    }
    
    

    return (
      <div className="App">
        <Header/>
        <body>
           {tasks}
           {taskForm}
           
        </body>
      </div>
    );
  }
  
}

export default App;
