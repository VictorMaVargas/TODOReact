import React, { Component } from 'react';
import axios from 'axios'
import './Footer.scss';
const apiKey = process.env.REACT_APP_API_KEY

class Footer extends Component{
  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
  }
  
  
  async componentDidMount() {
      const URL = (`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}`)
      let res = await axios.get(URL);
      let data = res.data;
      this.setState({ register: res.data });
      console.log(data.main.temp);
    }

    render(){
      //let data = this.state.data
          return(
              <div>
                {/* <p>Temperatura en Madrid: {this.data.main.temp}</p> */}
             </div>
          );
      }
  }
  
export default Footer;