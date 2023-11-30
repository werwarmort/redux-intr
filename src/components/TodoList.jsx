import TodoItem from "./Todoitem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
