import React, { Component } from 'react';
import './Main.css';
import ToDoList from '../ToDoList/ToDoList'

class Main extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return (
      <main>
        <ToDoList/>
      </main>
    );
  }
}

export default Main;