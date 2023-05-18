import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATUS,
} from "../constants/actions-types";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const toggleTaskStatus = (id) => ({
  type: TOGGLE_TASK_STATUS,
  payload: id,
});
