import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="appTitle">freecodecamp Markdown Previewer</h1>
        <div className="wrapper">
          <Editor />
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
