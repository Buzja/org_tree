import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrgChart  from 'react-orgchart';
import 'react-orgchart/index.css';
const initechOrg = {
  name: "Bill Lumbergh",
  actor: "Gary Cole",
  children: [
    {
      name: "Peter Gibbons",
      actor: "Ron Livingston",
      children: [
        {
          name: "And More!!",
          actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
        }
      ]
    },
    {
      name: "Milton Waddams",
      actor: "Stephen Root"
    },
    {
      name: "Bob Slydell",
      actor: "John C. McGi..."
    },
  ]
};

class App extends Component {
  render() {
    const MyNodeComponent = ({node}) => {
      return (
        <div className="initechNode" onClick={() => alert("Hi my real name is: " + node.actor)}>{ node.name }</div>
      );
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;
