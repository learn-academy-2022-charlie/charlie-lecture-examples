import React, { Component } from 'react'
import ContactCard from "./components/ContactCard";

class App extends Component {
  // constructor to create the state object
  constructor(props){
    super(props)
    this.state = {
      animalsArray: ["Quokka", "Chicken", "Gorilla", "Honey Badger", "Meerkat", "Mermaid", "Griffin", "Galapagos", "Sasquatch"],
      randimal: 0
    }
  }
  
  //part two create a method that will process some kind of input (usually from the User) and return to us a change in our state object.
  handleClick = () => {
    // defines a random number between 0 and the length of the array and rounds down. 
    let randomNum = Math.floor(Math.random() * this.state.animalsArray.length)
    //updates the state object's keys with these new values. 
    this.setState({ randimal: randomNum })
  }

  render() {
    return (
      <>
        {/* part 3 is our ability to pass information from App.js to the ContactCard.js using the component call */}

        <ContactCard 
        //pass an array as props
        captianMarvel={this.state.animalsArray} 
        // pass a number as props
        randimal={this.state.randimal}
        // pass a custom method as props
        clickMethod={this.handleClick}
        />
      </>

    )
  }
}

export default App
