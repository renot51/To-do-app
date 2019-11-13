import React from "react";

const ToDoItem = props => {
  const statusDoDone = props.todo.done;
  console.log(statusDoDone);
  let button;
  if (statusDoDone) {
    button = <button>&#10003;</button>;
  } else {
    button = <button>&#8634;</button>;
  }

  return (
    <div className="item">
      <p>{props.todo.text}</p>
      {button}
    </div>
  );
};

export default ToDoItem;
