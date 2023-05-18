import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATUS,
} from "../constants/actions-types";

const initialState = {
  tasks: [{
    id:1,
    title:"first task",
    isDone:false
  }],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isDone: !task.isDone };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default taskReducer;
