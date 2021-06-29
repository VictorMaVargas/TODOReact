import React, { Component } from "react";
import List from '../List/List';
import data from '../../data.json';
import { v4 as uuidv4 } from 'uuid';
 
class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: data
    }
  }
   
  handleSubmit = (e) => {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: uuidv4()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.handleSubmit}>
          <input ref={(a) => this._inputElement = a} placeholder="Introduce Tarea" id="item">
          </input>
          <button type="submit">add</button>
        </form>
      </div>
      <List entries={this.state.items}/>
    </div>
    );
  }
}
 
export default TodoList;