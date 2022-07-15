import React from "react";

function Task({name, category}) {
  return (
    <div className="task">
      <div className="label">{name}</div>
      <div className="text">{category}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
