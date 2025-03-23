import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store.jsx";
import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItems.module.css";

const  TodoItems = () => { 

  const { todoItems } = useContext(TodoItemsContext);
  
  return (
     <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;