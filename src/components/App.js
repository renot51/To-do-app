import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: "Wash my face!", done: false },
        { text: "Walk the dog", done: false },
        { text: "Pay the rent", done: false },
        { text: "Make so moneys", done: false },
        { text: "Make a website", done: true },
        { text: "Call my mom", done: true },
        { text: "Finish reading my book", done: true },
        { text: "Make more moneys", done: true }
      ]
    };
  }
  handleUpdateItem = val => {
    console.log("dsalkf");
  };
  handleAddToDo = val => {
    const toDo = { text: val, done: false };
    this.setState({ items: [toDo, ...this.state.items] });
  };
  render() {
    const toDos = this.state.items.filter(el => !el.done);
    const toDones = this.state.items.filter(el => el.done);

    return (
      <div className="app">
        <Navigation></Navigation>
        <ToDosContainer
          toDos={toDos}
          handleUpdateItem={this.handleUpdateItem}
          handleAddToDo={this.handleAddToDo}
        ></ToDosContainer>
        <ToDonesContainer toDones={toDones}></ToDonesContainer>
      </div>
    );
  }
}

export default App;
