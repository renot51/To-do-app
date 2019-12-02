import React from "react";
import ToDoItem from "./ToDoItem";

class ToDonesContainer extends React.Component {
  render() {
    const toDones = this.props.toDones;
    const toDonesItems = toDones.map(el => {
      return (
        <ToDoItem
          handleUpdate={this.props.handleUpdateItem}
          todo={el}
          key={el.text}
        ></ToDoItem>
      );
    });
    return (
      <div className="toDonesContainer">
        {toDones.length > 0 && (
          <div className="list">
            <h3>Done</h3>
            {toDonesItems}
          </div>
        )}
      </div>
    );
  }
}

export default ToDonesContainer;
