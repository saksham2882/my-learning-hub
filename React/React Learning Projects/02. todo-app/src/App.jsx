/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [todo, setTodo] = useState([]);
  // useState():
  // 1. useState() is a hook that allows us to add state to functional components.
  // 2. It returns an array with two elements: the current state value and a function to update the state value
  // 3. The state value is initialized with the value passed to the useState() function
  // 4. The state value can be updated by calling the function returned by useState
  // 5. The state value is updated immediately and the component is re-rendered with the new state value.
  
  // UseEffect: It is also a hook.
  // It is used to handle side effects in functional components.
  // It is used to update the state of the component after rendering.
  // It is used to fetch data from an API.
  

  // Getting Stored todos from localStorage:
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // The above line means: If there is any data under the "todos" key in localStorage, fetch it and store that data in the todo state. If there is no data under the "todos" key in localStorage, then initialize the storedTodos variable with an empty array.
    setTodo(storedTodos);
  }, [])


  // Add Task Functionality:
  const addTask = (input) => {
    const newTask = {
      id: Date.now(),
      input,
    };
    
    setTodo(todo.unshift(newTask));
    localStorage.setItem("todos", JSON.stringify(todo));
    
    toast.success("New Task Added. ")
    setTodo(JSON.parse(localStorage.getItem('todos')));
  }

  // Delete Task Functionality:
  const deleteTask = (id) => {
    const updatedTodos = todo.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo(updatedTodos);
    toast.success("Task Deleted. ")
  }

  return (
    <>
      <Navbar />
      <TodoForm addTask={addTask} />    {/* passing addTask function to TodoForm component */}
      <TodoList todo={todo} deleteTask={deleteTask} />
      <ToastContainer position='top-right' theme='dark' />
    </>
  )
}


export default App


