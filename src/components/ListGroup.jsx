import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import Item from './Item'

function ListGroup() {
  const {todo} = useContext(TodoContext)
    return (
        <ul className="list-group mt-5">
             {
              todo.map((todos) =>
              <Item key={todos.id} todos={todos}/>
              )
             }
        </ul>
    )
}

export default ListGroup