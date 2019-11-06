import React from "react";

function ToDosContainer() {
  return (
    <div className="toDosContainer">
      <div className="form">
        <form>
          <input className="input" type="text" name="toDos"></input>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
      <div className="list">
        <h3>TO DO</h3>
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

export default ToDosContainer;
