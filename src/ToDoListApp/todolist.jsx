import { useState, useEffect } from "react";
import "./todolist.css";
import Rerenders from "./rerenders";

export default function ToDoList() {
  //// State variables
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [{ Text: "Eat breakfast", isCompleted: false }];
  });

  const [newTask, setNewTasks] = useState({ Text: "", isCompleted: false });
  const [error, setError] = useState({ is: false, message: "" });
  //// Functions
  function HandleInputChange(event) {
    setNewTasks((t) => ({ ...t, Text: event.target.value }));
  }
useEffect(()=>{
  console.log("mounted");

  return()=>(console.log("unmounted"));
},[])

  function AddTask() {
    setError({ is: false, message: "" });
    let duplicate = false;
    tasks.forEach((x) => {
      if (x.Text === newTask.Text) {
        duplicate = true;
      }
    });

    if (newTask.Text.trim() === "") {
      setError({ is: true, message: "empty task will not add" });
    } else if (duplicate) {
      setError({ is: true, message: "task already added" });
    } else {
      setTasks((t) => [...t, newTask]);
      setNewTasks({ Text: "", isCompleted: false });
      console.log("added");
    }
  }

  function RemoveTask(index) {
    let updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function MoveUp(index) {
    let updatedTasks = [...tasks];
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function MoveDown(index) {
    if (index < tasks.length - 1) {
      let updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  const Toggle = (index) => {
    setTasks((t) =>
      t.map((task, i) => {
        if (i === index) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  // useEffect(() => {
  //  if(tasks.length>=5){

  //   alert("limit is reached");


  //  }
  // },[tasks]);

  //// Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  

  //// Component body
  return (
    <div className="App">
      <h1 className="Heading text-3xl">To-Do-List</h1>
      <input type="text" value={newTask.Text} onChange={HandleInputChange} />
      {tasks.length<=5&&(<button className="Add_button" onClick={AddTask}>
        Add Task
      </button>)}
      {error.is && <p className="error">{error.message}</p>}
      <div className="Lists">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <Rerenders fun={Toggle} index={index} task={task} />
              <button onClick={() => MoveUp(index)}>⬆️</button>
              <button onClick={() => MoveDown(index)}>⬇️</button>
              <button onClick={() => RemoveTask(index)}>⛔</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
