
import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  render() {
    //let {items, id} = this.props.data
    return (
      <section>
        <p>Tarea:{this.props.data.items||this.state.items}</p>
        <button onClick={this.props.remove}>Borrar tarea</button>
      </section>
    );
  }
}
export default Card