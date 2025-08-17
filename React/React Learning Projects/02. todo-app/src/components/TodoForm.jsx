/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

const TodoForm = ({ addTask }) => {

    const [input, setInput] = useState("");

    return (
      <>
        <div className="todo-form">
          <h1>Add New Todo</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Todo Task"
          />
          {input && <button onClick={() => {addTask(input); setInput("")} }>Add Task</button>}
        </div>
      </>
    );
}

export default TodoForm
