import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"
import TodoAppReducer from "./reducers/TodoApp.reducer"
import TodoApp from "./todoApp/TodoApp"


import "./styles.css";

const store = createStore(TodoAppReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
