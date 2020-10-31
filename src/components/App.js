import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState([]);
  const handleAdd = () => {
    //console.log("handleClick");
    if (newTask.length === 0) return;
    let temp = [...list];
    let obj = (
      <Task
        className="list"
        text={`${newTask}`}
        disabled={Boolean(true)}
        buttonDisabled={Boolean(false)}
      />
    );
    //console.log("handleClick after adding");
    temp.push(obj);
    // console.log(temp);
    setList(temp);
    setNewTask("");
  };
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleDelete = (index) => {
    // console.log("handleDelete", index);
    let temp = [...list];
    temp.splice(index, 1);
    //console.log(temp);
    setList(temp);
  };
  return (
    <div id="main">
      <textarea id="task" value={newTask} onChange={handleChange}></textarea>
      <button id="btn" onClick={handleAdd}>
        Add
      </button>
      <br />
      {list.map((el, index) => (
        <div key={`div${index}`}>
          {el}
          <button id="delete" onClick={() => handleDelete(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
