import { DeleteTaskBtn } from "./DeleteTaskBtn";
import { Task } from "./Task";

export function ToDoList({ id, onDelete }) {
  return (
    <div className="task">
      <ul>
        <li>
          <Task />
          <DeleteTaskBtn onClick={() => onDelete(id)}>❌</DeleteTaskBtn>
        </li>
      </ul>
    </div>
  );
}
