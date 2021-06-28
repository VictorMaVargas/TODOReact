import React, { Component } from "react";
import data from "../../data.json";
import Cards from "../Card/Card";
import { v4 as uuidv4 } from 'uuid';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: data
    };
  }

  addCard = (newTasks) => {
    
    this.setState({ tasks: [...this.state.tasks, { task: newTasks, id: uuidv4()}] });
  };

  
  renderCard = () => this.state.tasks.map((task) => 
     <Cards data={task} key={task.id} remove={() => this.removeCard(task.id)} />
  )

  removeCard = (i) => {
    let filteredArray = this.state.tasks.filter((item) => {
      return i!==item.id
    });
    this.setState({ tasks: filteredArray })
  }
  removeAllCards = ()=> this.setState({tasks:[]})
  
  resetCards = ()=> this.setState({tasks:data})

  handleSubmit = (event) => {
    event.preventDefault();

    let newTask = event.target.elements.newTask.value;

    this.addCard(newTask);
  };

  
  render() {
    return (
      <article>
        <h2>TODO LIST</h2>

        <form onSubmit={this.handleSubmit}>
          <label>Añade tarea</label>
          <br />
          <input type="text" name="newTask"></input>
          <br />
          <input type="submit" value="Add"></input>
        </form>
        {this.renderCard()}
        <br />
        <button onClick={this.removeAllCards}>Borrar todo</button>
        <br /> <br />
        <button onClick={this.resetCards}>Resetear</button>
        
      </article>
    );
  }



}









