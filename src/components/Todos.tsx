import Todo from "../models/todo";
import Item from "./Item";
import classes from "./Todos.module.css";

//when you create a new functional component you should add this React.FC type annotation
//merge our own prop definitions with those base props ex: <{ items: Todo[] }>
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
