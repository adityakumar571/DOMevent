import { useState } from "react";
import Button from "../Button/Button";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add new task to the list
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, newTask.trim()]);
    setNewTask(""); // Clear the input after adding
  };

  // Handle input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Delete a task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Move a task up in the list
  const moveTaskUp = (index) => {
    if (index === 0) return; // Can't move the first item up
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  // Move a task down in the list
  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return; // Can't move the last item down
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  return (
    <div className="Todo">
      <h1>Todo List</h1>
      <div className="InputBox">
        <input
          type="text"
          placeholder="Add Task"
          className="addInput"
          value={newTask}
          onChange={handleInputChange}
        />
        <Button name="Add Todo" onClick={addTask} />
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{index + 1}. {task}</span>
            <Button name="Delete" onClick={() => deleteTask(index)} />
            <Button name="☝️" onClick={() => moveTaskUp(index)} />
            <Button name="👇" onClick={() => moveTaskDown(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
