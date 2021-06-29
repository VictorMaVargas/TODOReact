import React, { Component } from 'react';
import './Main.css';
import ToDoList from '../Card/Card'

class Main extends Component {
  render() {
    return (
      <main>
        <ToDoList/>
      </main>
    );
  }
}

export default Main;