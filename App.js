import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from './components/Todo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }



  render() {
    return (
      <>
        <div className="todo_apk">
          <Todo />
        </div>
      </>
    );
  }
}

export default App;
