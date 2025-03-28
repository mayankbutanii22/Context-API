import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store.jsx";
import { useState } from "react";
function AddTodo() {
   const { addNewItem } = useContext(TodoItemsContext);
    const [todoName, setTodoName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleNameChange = (event) => {
      setTodoName(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDueDate(event.target.value);
    };
  
    const handleAddButtonClicked = () => {
      addNewItem(todoName, dueDate);
      setTodoName('');
      setDueDate('');
    };
   
  return (
    <div className="container text-center">
  <div className="row kg-row">
    <div className="col-6">
      <input type="text" value={todoName} onChange={handleNameChange} placeholder="Enter Todo Here"/>
    </div>
    <div className="col-4">
      <input type="date" value={dueDate} onChange={handleDateChange} />
    </div>
    <div className="col-2">
    <button type="button"className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
      Add
      </button>
    </div>
  </div>
  </div>
  );
}
export default AddTodo;