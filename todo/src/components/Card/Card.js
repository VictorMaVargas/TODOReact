import React, { Component } from "react";
import List from "../List/List";
//import data from '../../data.json'
import { v4 as uuidv4 } from 'uuid'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
 
    this.addItem = this.addItem.bind(this);
  }
   
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
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
     
    //console.log(this.state.items);
       
    e.preventDefault();
  }
  

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
                  placeholder="Añadir tarea">
          </input>
          <button type="submit">Add</button>
        </form>
        </div>
        <List entries={this.state.items}/>
      </div>
    );
  }
}
 
export default Card;