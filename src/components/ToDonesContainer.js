import React from "react";

function ToDonesContainer() {
  return (
    <div className="toDonesContainer">
      <div className="list">
        <h3>BEEN Here done that</h3>
        <div className="item">
          <p>make breakfast</p>
          <button>&#10003;</button>
        </div>
        <div className="item">
          <p>make breakfast</p>
          <button>&#10003;</button>
        </div>
        <div className="item">
          <p>make breakfast</p>
          <button>&#10003;</button>
        </div>
      </div>
    </div>
  ); // returns is the render
}

export default ToDonesContainer;
