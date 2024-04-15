import React, { useState } from "react";
import './App.css';

function App() {

  const [taskName, setTaskName] = useState(""); // Use [] instead of {}
  const [time, setTime] = useState(""); // Use [] instead of {}
  const [taskList, setTaskList] = useState([]); // Use [] instead of {}

  const addTask = () => {
    setTaskList([...taskList, {task: taskName, time: time}])
    setTaskName('')
    setTime('')
  }
  
 return (    
  
  <div className="App">
    <h1>Todo List</h1>
    <label>Task Name</label>
    <input type="text" id="task" value={taskName} onChange={(e)=>{ // Add value={taskName}
      setTaskName(e.target.value)
    }}/>
    <label>Time</label>
    <input type="text" id="time" value={time} onChange={(e)=>{ // Add value={time}
      setTime(e.target.value)
    }}/>
    <button onClick={addTask}>Add</button>
    </div>
  );
};

export default App;
