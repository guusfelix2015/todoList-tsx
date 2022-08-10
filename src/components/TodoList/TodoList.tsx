import { useState } from "react";
import { TodoForm } from "../TodoForm/TodoForm";

interface Todo {
  id: number;
  content: string;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    if (!todo.content || /^\s*$/.test(todo.content)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
