import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <h1>Bienvenido, pana!!</h1>
        <Link to="/todo">
          <button>
            ToDo List
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;