import React, { Component } from 'react'
import Tracker from './components/Tracker'
import './App.css'

class App extends Component {

  render() {

    return (
      <>
        <h1>Charlie's Job Readiness Tracker</h1>
        <div id="square">
          <h2>Week 1</h2>
        </div>
          <Tracker/>
        <div id="square">
          <h2>Week 2</h2>
        </div>       
          <Tracker/> 
          <h2>Week 3</h2>
          <Tracker/>
        
      </>
    )
  }
}

export default App


