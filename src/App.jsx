import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import initialText from "./initialText";
import "./App.css";
import marked from "marked";

marked.setOptions({
  breaks: true,
  sanitize: true
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      renderedText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      text: initialText,
      renderedText: marked(initialText)
    });
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
      renderedText: marked(e.target.value)
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="appTitle">freecodecamp Markdown Previewer</h1>
        <div className="wrapper">
          <Editor text={this.state.text} handleChange={this.handleChange} />
          <Preview renderedText={this.state.renderedText} />
        </div>
      </div>
    );
  }
}

export default App;
