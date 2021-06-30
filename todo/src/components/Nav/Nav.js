import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Nav.scss";

class Nav extends Component {

  render() {
    return (
      <nav className="Nav">
        <ul className="Nav__list">
          <li className="Nav__listItem">
            <Link className="Nav__link" to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo"> TODO List</Link>
          </li>
          <li>
            <Link to="/weather"> Weather Info</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
