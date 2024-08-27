import React, { useEffect } from 'react'
import apiHandler from './apiHandler.js'

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
  
}





  return (
    // component file 
    <div className='App'>
      <div>
        <input
        id='todo-id'
        type='text'
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        />
        <button type='button' onClick={createTodo}>
          Add Todo 
        </button>
      </div>

      <ul>
        // 
      </ul>
    </div>
  )
}

export default App