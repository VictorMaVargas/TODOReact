import React, { Component } from "react";
import './Card.scss'

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "Tiene más de 20 caracteres"
    };
  }

  render() {
    //let {items, id} = this.props.data
    console.log(this.props.data.task.length);
    return (
      <section className='Card'>
        <p>Tarea:{this.props.data.task.length>30 ? this.props.data.task.slice(0,30) + "...": this.props.data.task}</p>
        <button onClick={this.props.remove}>Borrar tarea</button>
      </section>
    );
  }
}
export default Card
