import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <TodoList />
      </div>
    </>
  );
}
