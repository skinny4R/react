import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/action";
import "./AddTask.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName !== "") {
      dispatch(addTask({ id: Date.now(), title: taskName, isDone: false }));
      setTaskName("");
    }
  };

  const handleDeleteTask = () => {
    // Implement the logic for deleting a task here
    // ...
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        type="text"
        value={taskName}
        onChange={handleInputChange}
      />
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
