export function AddTaskBtn({ children, onClick }) {
  return (
    <div className="add-task-btn">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
