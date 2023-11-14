export function ResetBtn({ children, onReset }) {
  return (
    <div>
      <button onClick={onReset} className="reset-btn">
        {children}
      </button>
    </div>
  );
}
