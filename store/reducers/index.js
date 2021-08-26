import { combineReducers } from "redux";
import countReducer from "./Reducers";

export const rootReducer = combineReducers({ countReducer: countReducer });
