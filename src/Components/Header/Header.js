import React from 'react';
import './Header.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const header = (probs)=> {
   return (
    <div className='headerCon'>
        <h1>Todo List</h1>
        <h4>'Plan Ahead!'</h4>
        <MaterialIcon icon="add_circle" id='addTaskButton' onClick= {probs.clicked} size="large"/>
        
    </div>
   );
}
export default header;