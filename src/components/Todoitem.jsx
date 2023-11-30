import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <span
        className="delete"
        onClick={() => dispatch(removeTodo({ id }))}
        style={{ color: "red" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
