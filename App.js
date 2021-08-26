import React from "react";
import { Provider } from "react-redux";
import TodoList from "./screens/Todolist";
import configureStore from "./store/configureStore";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
