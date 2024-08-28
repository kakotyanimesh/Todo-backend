import React, { useEffect, useState } from 'react'
import apiHandler from './apiHandler.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const App = () => {

const [todos, setTodos] = useState([])
// todos => array to store all todos
const [todo, settodo] = useState("")
// todo => string to store a single todo


useEffect (() => {
  const todoFromBackend = async () => {
    const todos = await apiHandler.getAllTodo()
    setTodos(todos)
  }
  todoFromBackend()
}, [])


const createTodo = async e => {
  // (e) === e
  e.preventDefault()

  if(!todo){
    // got todo parameter from input field
    alert(`please write something !`)
    return
  }

  // check for unique todo 

  if(todos.some((t) => t === todo )){
    // use some method to find if entered value is existed in todos array or not !
    alert(`todo with ${todo} name already exist !`)
    return
  }

  try {
    const newTodo = await apiHandler.createTodo(todo)
    // calling createTodo function and backend at the same time
    setTodos([...todos, newTodo])
    settodo("")
    // adding it in todos array
  } catch (error) {
    console.log(`error while creating todo`, error);
    alert(`failed to create todo , try again !`)
    
  }

}


const updateTodo = async (e, id) => {
    
   try {
    e.stopPropagation()
    // prevent from bubble up in dom => stop the event after one time => propogating to parent element 
     const payload = {
       completed: !todos.find(t => t.id === id).completed
       // we accesss the todo from todos array {find return one element} and checked its completed status 
     }
 
     const updateTodo = await apiHandler.updateTodo(id, payload)
     // calling update from backend and gives its required parameter
     setTodos(todos.map(t => t.id === id ? updateTodo : t))
     // map returns new array where if id of original todo === id from update parameter 
   } catch (error) {
      console.log(`error in updating `, error);
      
   }

}


const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation()
      await apiHandler.deleteTodo(id)
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.log(`error while delete`. error);
      
    }
}


  return (
    // component file 
    
    <div class="h-auto w-auto flex items-center  justify-center font-sans mt-20 text-red-200 grid cols-2 text-[15px]" >
      <div>
        <h1 class='ml-24 sm:ml-60 text-xl '> 📝 TODO APP  </h1>
        <form onSubmit={createTodo} class='flex space-x-7 sm:space-x-16 m-7 sm:m-16 '>
        <input
        id='todo-id'
        type='text'
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder='enter your todo here'
        class="p-2  bg-[#e2e8f0] text-black rounded-xl font-medium sm:w-96"
        />

        <button type='submit' class="bg-[#6366f1] p-1 sm:p-3 rounded-xl">
          Add 
        </button>
        </form>
      </div>


      <div class="flex items-center justify-center text-xl ">
         <ul>
        {todos.map(({id, title, completed}) => (
          <li
            key={id}
            onClick={(e) => updateTodo(e, id)}
            className={completed ? "completed" : ""}
            
          >
            {title} <span class='ml-3' onClick={e => deleteTodo(e, id)}><FontAwesomeIcon icon={faXmark} /></span>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  )
}

export default App