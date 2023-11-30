import logo from "./logo.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };


  return (
    <div className="App">
      <h1>redux</h1>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
