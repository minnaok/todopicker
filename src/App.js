import React, { useState }  from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';


 
function App() {
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState({desc: '', date: new Date()});
  const [todos, setTodos] = useState([]);
  
  

  
 
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
   
  }
 
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
    
}

 
  return (
    <div className="App">
      <header name="Todos">
        <h1>TodoList</h1>
      </header>
      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={date} format={"dd-MM-yyyy"} onChange={date => setDate(date)}/>  
    </MuiPickersUtilsProvider>
    <TextField label= "Description"type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <Button size= "small" variant="contained" color="secondary" onClick={addTodo}>Add</Button>
      
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{date.toLocaleDateString()}</td>
          <td>{todo.desc}</td>
        
    
        </tr>)
      }
      </tbody></table>
    </div>
  );
}
 
export default App;