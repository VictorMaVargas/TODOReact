import React, { Component } from "react";
 
class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }
   
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Introducir Tarea">
            </input>
            <button type="submit">Agregar</button>
          </form>
      </div>
    );
  }
}
 
export default TodoList;