import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="App">
      <Form />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
