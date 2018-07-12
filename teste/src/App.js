import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./todoList";
import Counter from "./counter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
