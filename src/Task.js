import { useState } from "react";

export function Task({ onDelete }) {
  const [inputValue, setInputValue] = useState("");
  const [taskText, setTaskText] = useState(""); // State to store the task text
  const [inputVisible, setInputVisible] = useState(true); // State to control input visibility

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setTaskText(inputValue); // Update task text
      setInputValue(""); // Optionally clear the input field
      setInputVisible(false); // Hide the input field
    }
  }

  return (
    <div>
      {inputVisible && (
        <input
          className="input"
          placeholder="Enter Task"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
      )}
      {!inputVisible && <p>{taskText}</p>}
    </div>
  );
}
