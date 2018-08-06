import React, { Component } from 'react';
import './App.css';
import OrgChart  from 'react-orgchart';
import 'react-orgchart/index.css';
const initechOrg = {
  name: "Bill Lumbergh",
  position: "CEO",
  children: [
    {
      name: "Peter Gibbons",
      position: "Manager",
      children: [
        {
          name: "Andy Horsell",
          position: "Engineer",
          children:[
            {
              name: "Mark Bulak",
              position: "some position"
            },
            {
              name: "Tom Hikom",
              position: "the same position"
            }
          ]
        }
      ]
    },
    {
      name: "Milton Waddams",
      position: "Manager"
    },
    {
      name: "Bob Slydell",
      position: "Manager"
    },
    {
      name: "John Newman",
      position: "Manager"
    }
  ]
};

class App extends Component {
  render() {
    const MyNodeComponent = ({node}) => {
      return (
        <div className="node_wrapper" >
         <div className="node_data"> 
           <h1>{ node.name }</h1>
           <h2>{node.position}</h2>
         </div>
         <button className="node_btn" onClick={() => alert(`info: name ${node.name} position ${node.position}`)}>info</button>
        </div>
      );
    };
    return (
      <div className="App">
        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;
