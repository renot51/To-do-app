import React from "react";
import ToDoItem from "./ToDoItem";

const ToDonesContainer = props => {
  const toDones = props.toDones;
  const toDonesItems = toDones.map(el => {
    return <ToDoItem todo={el} key={el.text}></ToDoItem>;
  });

  return (
    <div className="toDonesContainer">
      <div className="list">
        <h3>Done</h3>
        {toDonesItems}
      </div>
    </div>
  ); // returns is the render
};

export default ToDonesContainer;
