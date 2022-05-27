import React, { Component } from 'react'
import Plate from './components/Plate'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["collard greens", "fried okra", "steak", "andouille sausage"],
      kidMenu: ["hot dogs", "okra tots", "mac-n-cheese", "chicken nuggets"],
      order: []
    }
  }

  takeOrder = (item) => {
    this.setState({order: [...this.state.order, item]})
  }

  render(){
    console.log(this.state.order)
    return(
      <>
        <h1>Charlie's BBQ</h1>
        <h2>Adult Menu</h2>
        <Plate 
          menuItem={this.state.adultMenu}
          takeOrder={this.takeOrder}
        />
        <h2>Kid Menu</h2>
        <Plate 
          menuItem={this.state.kidMenu}
          takeOrder={this.takeOrder}
        />
        <h3>What's your order?</h3>
        <ul>
          {this.state.order.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </>
    )
  }
}

export default App