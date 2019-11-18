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
    this.setState({ value: event.target.value }); //on key it update the state ,when we update the state it re-render our components.
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent from refreshing
    this.props.handleAddToDo(this.state.value);
    this.setState({ value: "" }); //it will update the value of the input and rerender the components
  }

  render() {
    const todos = this.props.toDos;
    const todoItems = todos.map(el => {
      return (
        <ToDoItem
          handleUpdate={this.props.handleUpdateItem}
          todo={el}
          key={el.text}
        ></ToDoItem>
      );
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
