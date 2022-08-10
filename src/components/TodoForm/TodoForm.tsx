import { FormEvent, useState } from "react";

interface Todo {
  id: number;
  content: string;
}

interface PropsType {
  addTodo: (todo: Todo) => void;
}

export function TodoForm({ addTodo }: PropsType) {
  const [input, setInput] = useState("");

  const sendEvent = (e: FormEvent) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 10000000000000),
      content: input,
    });
    setInput("");
  };

  return (
    <>
      <form onSubmit={sendEvent}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={input}
          name="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Criar +</button>
      </form>
    </>
  );
}
