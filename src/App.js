import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask/AddTask";
import ListTask from "./components/ListTask/ListTask";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>for testing</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
