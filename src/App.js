import { useState } from "react";
import "./App.css";

function App() {
  const [toDoItem, setToDoItem] = useState(null);
  const [toDoList, setToDoList] = useState([]);

  console.log(toDoItem);

  const handleAddToList = () => {
    let arr = toDoList;
    console.log("todoitem in function", toDoItem);
    arr.push(toDoItem);
    setToDoList([...arr]);
    console.log("to do list", toDoList);
  };

  /*   const handleRemoveFromList = (itemToDelete) => {
    console.log(itemToDelete);
    const index = toDoList.indexOf(itemToDelete);
    let arr = toDoList;
    arr.splice(index, 1);
    setToDoItem([...arr]);
    console.log("array after deelting", arr);
  }; */

  const handleRemoveFromList = (itemToDelete) => {
    console.log(itemToDelete);
    const index = toDoList.indexOf(itemToDelete);
    let arr = toDoList;
    arr.splice(index, 1);
    setToDoList([...arr]);
    console.log("array after deelting", arr);
  };

  const handleEdit = (index) => {
    let arr = toDoList;
    arr[index] = toDoItem;
    setToDoList([...arr]);
  };

  return (
    <div className="">
      <h1 className="text-xl">Todo List</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Add your task"
          className="p-2 m-2 border"
          value={toDoItem}
          onChange={(e) => setToDoItem(e.target.value)}
        />
        <div>
          <button className="border p-2 m-2" onClick={handleAddToList}>
            Submit
          </button>
        </div>
      </div>
      <ul>
        {toDoList?.map((toDoItem, i) => {
          console.log("inside map", toDoItem);
          return (
            <li key={i}>
              <span className="p-2 m-2 border">{toDoItem}</span>
              <button
                className="p-2 m-2 border"
                onClick={() => handleRemoveFromList(i)}
              >
                Delete
              </button>
              <button className="p-2 m-2 border" onClick={() => handleEdit(i)}>
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
