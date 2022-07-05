import React from "react"
import PropTypes from "prop-types"
import Header from './components/Header'

class App extends React.Component {
  render () {

    return (
      <>
        <Header {...this.props}/>
      </>
    );
  }
}

export default App
