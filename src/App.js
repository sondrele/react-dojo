import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import arrayUtil from "dojo/_base/array";

class App extends Component {
  constructor() {
    super()
    this.state = {
      foo: ["foo", "bar", "baz"]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.foo.indexOf("foo")} To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
