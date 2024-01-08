import React, { useState } from "react";
import "./App.css"

const Todo = () =>{
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState('');

    const addTask = () =>{
        if(inputTask.trim() !==''){
            setTasks([...tasks, inputTask]);
            setInputTask('');
        }
    };

    const removeTask = (index) =>{
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <ul>
                {tasks.map((singleTask, index) =>(
                    <li key={index}>
                        {singleTask}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    )
}

export default Todo;