import React, { Component } from 'react'
import NasaApi from './NasaApi'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipAddress: ""
    }
  }
  // Fetch as part of a method
  getIp = () => {
    fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(payload => this.setState({ ipAddress: payload.ip}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <h1>Find Your IP Address</h1>
        <button onClick={this.getIp}>Click here to see your IP Address</button>
        <p>IP: {this.state.ipAddress}</p>

        <NasaApi/>        
      </>
    )
  }
}
export default App