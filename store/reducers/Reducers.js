import { REMOVE_TASK, SAVE_TASK } from "../types";
const initialState = {
  task: [],
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case REMOVE_TASK:
      const remove = state.task.filter((item) => item?.key !== action.payload);
      return {
        ...state,
        task: [...remove],
      };
    default:
      return state;
  }
};
export default countReducer;
