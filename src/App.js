import { useState } from "react";
import { ResetBtn } from "./components/ResetBtn";
import { AddTaskBtn } from "./components/AddTaskBtn";
import { ToDoList } from "./components/ToDoList";
export default function App() {
  const [newTask, setNewTask] = useState([]);
  function handleAddTask() {
    setNewTask([...newTask, newTask.length + 1]);
  }
  function handleDeleteTask(taskId) {
    setNewTask(newTask.filter((id) => id !== taskId));
  }
  function handleReset() {
    setNewTask([]);
  }
  return (
    <div className="container">
      <h1>ToDo List</h1>
      {newTask.map((newTaskId) => (
        <ToDoList key={newTaskId} id={newTaskId} onDelete={handleDeleteTask} />
      ))}
      <AddTaskBtn onClick={handleAddTask}>➕ Add task</AddTaskBtn>
      <ResetBtn onReset={handleReset}>Reset</ResetBtn>
    </div>
  );
}
