import React, { Component } from 'react';
import axios from 'axios'
import './Footer.scss';
const apiKey = process.env.REACT_APP_API_KEY;

class Footer extends Component{
  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
  }
  
  async componentDidMount() {
      const URL = (`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`)
      let res = await axios.get(URL);
      let data = res.data;
      this.setState({ register: res.data.main.temp });
      console.log(data.main.temp);
    }

  render(){
    return(
        <div className='Footer'>
          <p>Temperatura en Madrid: {this.state.register}°C</p>
        </div>
    );
  }
}
  
export default Footer;