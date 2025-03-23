import AppName from "./Component/AppName.jsx";
import AddTodo from "./Component/AddTodo.jsx";
import TodoItems from "./Component/TodoItems.jsx";
import WelcomeMessage from "./Component/WelcomeMessage.jsx";
import './App.css';
import TodoItemsContextProvider from "./Store/todo-items-store.jsx";

function App() {
  return (
  <TodoItemsContextProvider>
  <center className="todo-container">
    <AppName/>
    <AddTodo />
    <WelcomeMessage/>
    <TodoItems />
</center>
</TodoItemsContextProvider>
  );
}
export default App;
