import React, { Component } from 'react'
import Header from './components/Header'
import Car from './components/Car'
import Footer from './components/Footer'

class App extends Component{
  render(){
    return(
      <>
        <Header/>
        <Car/>
        <Footer/>
      </>
    )
  }
}
export default App