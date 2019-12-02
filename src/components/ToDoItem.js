import React from "react";

class ToDoItem extends React.Component {
  render() {
    const statusDoDone = this.props.todo.done;
    let button;
    if (statusDoDone) {
      button = (
        <button onClick={() => this.props.handleUpdate(this.props.todo.id)}>
          &#8634;
        </button>
      );
    } else {
      button = (
        <button onClick={() => this.props.handleUpdate(this.props.todo.id)}>
          &#10003;
        </button>
      );
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
