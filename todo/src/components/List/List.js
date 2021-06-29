import React, { Component } from 'react';
import './List.css';

class List extends Component {
  
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <div>
        <ul className="theList">
          {listItems}
        </ul>
        <button>Borrar</button>
      </div>
    );
  }
}

export default List;