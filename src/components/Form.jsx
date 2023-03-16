import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

function Form() {


  // const [text ,setText] = useState("")
  
  // const handleSubmit =(e) =>{
  //   e.preventDefault()
  //  if(edit.isEdit){
  //   updateTodo(edit.todo.id , text)
  //  }else{
  //   saveTodo(text)
  //  }
  
  //   setText("")
  // }

  // useEffect(()=>{
  //   setText(edit.todo.text)
  // },[edit])
 
  const {saveTodo , edit , updateTodo} = useContext(TodoContext)

  const [text , setText] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(edit.isEdit){
      updateTodo(edit.todo.id , text)
    }else{
      saveTodo(text)
    }
    setText("")
  }
  useEffect(()=>{
    setText(edit.todo.text)
  },[edit])

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="mb-3">
        <input value={text} type="text" className="form-control rounded-0" id="exampleCheck1" required onChange={(e)=>setText(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary rounded-0 w-100">Submit</button>
    </form>
  )
}

export default Form