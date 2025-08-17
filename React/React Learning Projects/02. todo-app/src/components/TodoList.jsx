/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TodoItem from './TodoItem'

const TodoList = ({ todo, deleteTask }) => {
    return (
        <>
            <section className='todo-list'>
                <h1>Todo List</h1>
                <div className="container">
                    {
                        todo && todo.length > 0 ? todo.map(element => {
                            return (
                                <TodoItem 
                                    element={element} 
                                    deleteTask={deleteTask} 
                                    key={element.id}
                                />
                            )
                        }) : <p> You have no Task </p>
                    }
                </div>
            </section>
        </>
    )
}

export default TodoList
