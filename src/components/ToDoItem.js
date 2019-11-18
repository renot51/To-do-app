import React from "react";

class ToDoItem extends React.Component {
  updateItem = () => {
    this.props.handleUpdate();
    console.log(this.props);
  };
  render() {
    const statusDoDone = this.props.todo.done;
    let button;
    if (statusDoDone) {
      button = <button onClick={this.updateItem}>&#8634;</button>;
    } else {
      button = <button onClick={this.updateItem}>&#10003;</button>;
    }
    return (
      <div className="item">
        <p>{this.props.todo.text}</p>
        {button}
      </div>
    );
  }
}

export default ToDoItem;
