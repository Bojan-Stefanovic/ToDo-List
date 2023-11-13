export function DeleteTaskBtn({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} className="delete-task-btn">
        {children}
      </button>
    </div>
  );
}
