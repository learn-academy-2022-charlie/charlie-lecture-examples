import React, { Component } from 'react'
import Capitalize from './components/Capitalize'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    // event is passed to us from the onChange attribute
    // console.log(e) - Object provided by onChange attribute
    // console.log(e.target)
    // console.log(e.target.value) - Provides the value in our input
    this.setState({name: e.target.value})
    // console.log("handle change log:", this.state.name) - This will not show the most recent updated state
  }

  render() {
    console.log("render log:", this.state.name) // console logging here will give you the most current state
    return (
      <>
        <h1>Greeter App</h1>
        <input 
          type="text" 
          // onChange is an input attribute that provides a property called event
          onChange={this.handleChange}
        />
        {/* We will pass state to Capitalize as a prop */}
        <Capitalize name={this.state.name}/>
      </>
    )
  }
}

export default App