import { REMOVE_TASK, SAVE_TASK } from "../types";

export function SaveTask(data) {
  return {
    type: SAVE_TASK,
    payload: data,
  };
}

export function RemoveTask(id) {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
}
