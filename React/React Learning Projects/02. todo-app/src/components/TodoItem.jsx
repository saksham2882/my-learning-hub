/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TodoItem = ({ element, deleteTask }) => {
    return (
        <>
            <div className="card">
                <span>
                    {element.input}
                </span>
                <button onClick={() => deleteTask(element.id)} >
                    Delete
                </button>
            </div>
        </>
    )
}

export default TodoItem
