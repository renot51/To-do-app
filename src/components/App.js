import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const items = localStorage.getItem("toDo-Items");
    let parst = JSON.parse(items);

    if (!parst) {
      parst = [];
    }
    this.setState({ items: parst });

    console.log(parst);
  }

  handleUpdateItem = id => {
    const updatedItems = this.state.items.map(el => {
      if (el.id === id) {
        el.done = !el.done;

        return el;
      }
      return el;
    });
    this.setState({ items: updatedItems });
    localStorage.setItem("toDo-Items", JSON.stringify(updatedItems));
  };

  handleAddToDo = val => {
    const toDo = { id: new Date().getTime(), text: val, done: false };
    const items = [toDo, ...this.state.items];
    this.setState({ items });
    localStorage.setItem("toDo-Items", JSON.stringify(items));
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
        <ToDonesContainer
          toDones={toDones}
          handleUpdateItem={this.handleUpdateItem}
        ></ToDonesContainer>
      </div>
    );
  }
}

export default App;
