//Imports are how react files know about  one another
import React, { Component } from 'react'


// the logic of the component
class ContactCard extends Component {
  
  render() {
    console.log("ContactCard obj", this.props)
// The display of our component<button onClick={this.handleClick} >Click Me!</button>

    return (
      <div>
        {/* Calling on our new properties using the syntax this.props */}
        <h1>Hello {`${this.props.captianMarvel[this.props.randimal]}`}</h1>

        <h3>Contact Card</h3>
        {/* The method handleClick in App.js is activated here using the onCLick attribute and calling on the prop we assigned handleClick to in the Component Call*/}
        <button onClick={this.props.clickMethod} >Click Me!</button>
      </div>
      
    )
  }
}
export default ContactCard