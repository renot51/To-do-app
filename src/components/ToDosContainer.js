import React from "react";
import ToDoItem from "./ToDoItem";

class ToDosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const todos = this.props.toDos;
    const todoItems = todos.map(el => {
      return <ToDoItem todo={el} key={el.text}></ToDoItem>;
    });

    return (
      <div className="toDosContainer">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              name="toDos"
              value={this.state.value}
              onChange={this.handleChange}
            />
            {/* this is the input*/}
            <input className="btn" type="submit" value="Submit" />{" "}
            {/* this is the button*/}
          </form>
        </div>
        <div className="list">
          <h3>TO DO</h3>
          {todoItems}
        </div>
      </div>
    ); // returns is the render
  }
}

export default ToDosContainer;
