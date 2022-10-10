import { Component, Fragment } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <Fragment>
        <Counter />
      </Fragment>
    );
  }
}

export default App;
