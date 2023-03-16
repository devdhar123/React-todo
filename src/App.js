
// import { useState } from 'react';
import Form from './components/Form';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';
// import { v4 as uuidv4 } from 'uuid';
import { TodoProvider } from './context/TodoContext';

function App() {

  // const [todo , setTodo] = useState([])

  // const [edit , setEdit] = useState({
  //   todo : {},
  //   isEdit : false
  // })

  // const saveTodo =(text) =>{
  //   const newTodo = {
  //     id : uuidv4(),
  //     text: text
  //   }
  //   setTodo([...todo , newTodo])
  // }

  // const deleteTodo = (id)=>{
  //   setTodo(todo.filter(item => item.id !==id))
  // }

  // //edittodo
  // const editTodo = (todos) =>{
  //   setEdit({
  //     todo : todos,
  //     isEdit : true
  //   })
  // }

  // //updatetodo

  // const updateTodo = (id , text) =>{
  //   setTodo(todo.map(item => item.id == id  ? {...item , text : text} : item))
  //   setEdit({
  //     todo : {},
  //     isEdit : false
  //   })
  // }

  
  

  return (
    <TodoProvider>
      <div className="App">
      <Navbar />
      <div className='container mt-5'>
        <Form />
        <ListGroup/>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
