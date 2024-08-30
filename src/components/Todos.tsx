import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "../models/todo";
import Item from "./Item";
import classes from "./Todos.module.css";

//when you create a new functional component you should add this React.FC type annotation
//merge our own prop definitions with those base props ex: <{ items: Todo[] }>
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
