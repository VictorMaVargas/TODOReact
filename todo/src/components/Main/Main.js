import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';
import List from '../pages/List/List';
import Home from '../pages/Home';
import WeatherInfo from '../pages/WeatherInfo'

class Main extends Component {
  
  render() {
    return (
      <main className='Main'>
        <div className="wrapper">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/todo" component={List} />
            <Route path="/weather" component={WeatherInfo} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Main;