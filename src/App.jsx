import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>redux</h1>
      <InputField
        text={text}
        handleInput={setText}
        handleSubmit={handleAction}
      />

      {status == "loading" && <h2>loading...</h2>}
      {error && <h2>An error occurred: {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
