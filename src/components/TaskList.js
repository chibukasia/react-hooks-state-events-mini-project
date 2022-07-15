import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const newTasks = tasks.map(task=>{
    return <Task key={task.text} name={task.text} category={task.category}/>
  })
  return (
    <div className="tasks">
      {newTasks}
    </div>
  );
}

export default TaskList;
