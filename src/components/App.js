import React, { Component } from "react";

class App extends Component {
  state = {
    Messages: [],
    CurrentUser: {},
    Input: ""
  };
  handleInputChange = e => {
    this.setState({ Input: e.target.value });
  };
  handleEnterKey = e => {
    const Messages = [...this.state.Messages, this.state.Input];
    if (e.keyCode === 13) {
      this.setState({
        Input: "",
        Messages
      });
    }
  };
  render() {
    return (
      <div className="App">
        <header>React ChatBot</header>
        <input type="text" value={this.state.Input} onChange={this.handleInputChange} onKeyDown={this.handleEnterKey} />
        <pre className="bg-light p-1 border rounded">{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
