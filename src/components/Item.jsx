import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function Item({todos}) {

    const {deleteTodo,editTodo} = useContext(TodoContext)

    return (
        <li className="list-group-item rounded-0 ">{todos.text}<span><button className='btn-btn sm btn-danger bg-danger text-light border-light float-end'onClick={()=>deleteTodo(todos.id)}>Delete</button></span>
        <button className='btn-btn sm btn-danger bg-warning text-light border-light float-end'onClick={()=>editTodo(todos)}>Edit</button>
        </li>
    )
}

export default Item