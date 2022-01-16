import "./App.css";
import { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Train from "./components/train";
import ClassClick from "./components/ClassClick";
import Functionclick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind />
      </div>
    );
  }
}

export default App;
