import React, { Component } from 'react'

class Plate extends Component{
  render(){
    return(
      <>
        <ul>
          {this.props.menuItem.map(value => {
            return(
              <li>
                <button onClick={ () => this.props.takeOrder(value)}>
                  {value}
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Plate