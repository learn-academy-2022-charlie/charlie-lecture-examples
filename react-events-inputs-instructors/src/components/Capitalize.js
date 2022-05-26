import React, { Component } from 'react'

class Capitalize extends Component {

    capitalize = (userInput) => {
      return userInput.toUpperCase()
    }

  render() {
    return (
      <>
        <h3>HELLO I SEE YOUR NAME IS:</h3>
        <p>{this.capitalize(this.props.name)}</p>
        {/* <p>{this.props.name.toUpperCase()}</p> */}
      </>
    )
  }
}

export default Capitalize