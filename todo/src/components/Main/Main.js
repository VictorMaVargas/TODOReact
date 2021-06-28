import React, { Component } from 'react';
import './Main.css';
import Todolist from '../Todolist/Todolist';

class Main extends Component {
  
  render() {
    return (
      <main>
        <Todolist/>
      </main>
    );
  }
}

export default Main;