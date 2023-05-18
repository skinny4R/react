import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleTaskStatus } from "../../redux/actions/action";

const Task = ({ task, onDelete }) => {
  const { id, title, isDone } = task;
  const dispatch = useDispatch();

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => dispatch(toggleTaskStatus(id))}
      />
      {isDone ? (
        <span className="title" style={{ color: "green" }}>
          {title}
        </span>
      ) : (
        <span className="title" style={{ color: "red" }}>
          {title}
        </span>
      )}

      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
