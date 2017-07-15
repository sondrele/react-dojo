import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import arrayUtil from "dojo/_base/array";
import lang from "dojo/_base/lang";
import d from "dojo/on";

class App extends Component {
  constructor() {
    super()
    this.state = {
      foo: ["foo", "bar", "baz"]
    }
  }
  render() {
    console.log(lang)
    console.log(d)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.foo.map(foo => (
          <p key={foo} className="App-intro">
            {foo} has index {arrayUtil.indexOf(this.state.foo, foo)}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
