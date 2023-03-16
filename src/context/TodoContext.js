import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext()

export const TodoProvider = ({children}) =>{

    const [todo , setTodo] = useState([])

    const [edit , setEdit] = useState({
        todo : {},
        isEdit : false
    })

    const saveTodo =(text) =>{
        const newTodo ={
            id : uuidv4(),
            text : text
        }
        setTodo([...todo , newTodo])
    }

    const deleteTodo = (id) =>{
        setTodo(todo.filter(item => item.id !== id))
    }

    const editTodo = (todos) =>{
        setEdit({
            todo : todos,
            isEdit : true
        })

    }

    const updateTodo = (id , text) =>{
        setTodo(todo.map(item => item.id == id ? {...item , text : text} : item))
        setEdit({
            todo : {},
            isEdit : false
        })
    }
    return(
        <TodoContext.Provider value={{
            todo,
            saveTodo,
            deleteTodo,
            edit,
            editTodo,
            updateTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext