import React, {Component} from 'react';
import Tasks from './Components/Tasks/Tasks';
import Header from './Components/Header/Header';

class App extends Component {
  //state= ()=>this.retrieveState();
  /*{
    tasks: [
    ]
  }*/

  storeState= () =>{ 
    const stateStr = JSON.stringify(this.state);
    localStorage.setItem("state", stateStr);
  }

  state= () => {
    const stateStr = localStorage.getItem("state");
    const updatedState= null;
    if(stateStr != null) {
            const retrievedState= JSON.parse(stateStr);
            updatedState= retrievedState.tasks;
      }
    else {
            const newState= {tasks: []};
            updatedState= newState;
          }
          return updatedState;
    }

  addNewTaskHandler =() =>{
    const tasks = [...this.state.tasks];
    const NewTask= {
      title: null,
      desc: null,
      date: null,
      time: null,
      priority: null,
      id: tasks.length
    };
    tasks.push(NewTask);
    this.setState({tasks: tasks});
    this.storeState();
  }
  changeFieldsHandler=(event, taskIndex) =>{
    const tasks = [...this.state.tasks];
    let nam= event.target.name;
    let  val= event.target.value;
    tasks[taskIndex][nam]= val;
    this.setState({tasks: tasks});
    this.storeState();
  }
  deleteTaskHandler =(taskIndex) =>{
    let tasks =[...this.state.tasks];
    tasks.splice( taskIndex, 1 );
    this.setState({tasks: tasks});
    this.storeState();
  }
  render() {
    let tasks = null;
      tasks = (
      <div>
          <Tasks
             tasks= {this.state.tasks}
             delete= {this.deleteTaskHandler}
             change= {this.changeFieldsHandler}
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
