import React, { useState } from "react";

export function Task({ onDelete }) {
  const [taskText, setTaskText] = useState("");
  const [inputVisible, setInputVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTaskText(e.target.value);
      setInputVisible(false);
    }
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const renderInputField = () => (
    <input
      placeholder="Enter Task"
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      value={taskText}
      style={{
        textDecoration: isChecked ? "line-through" : "",
        color: isChecked ? "gray" : "",
      }}
    />
  );

  const renderTaskText = () => (
    <p
      style={{
        textDecoration: isChecked ? "line-through" : "",
        color: isChecked ? "gray" : "",
      }}>
      {taskText}
    </p>
  );

  return (
    <div className="task">
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      {inputVisible ? renderInputField() : renderTaskText()}
    </div>
  );
}
