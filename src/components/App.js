import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";

function App() {
  return (
    <div className="app">
      <Navigation></Navigation>
      <ToDosContainer></ToDosContainer>
      <ToDonesContainer></ToDonesContainer>
    </div>
  ); // returns is the render
}

export default App;
