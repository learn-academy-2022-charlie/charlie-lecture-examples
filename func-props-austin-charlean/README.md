## Create React App
- $ cd charlie-lecture-examples
- $ clear
- $ git status
- $ git pull origin main
- $ git checkout -b func-props-aw-cb
- $ yarn create react-app func-props-austin-charlean
- $ cd func-props-austin-charlean
- $ yarn start
- $ code .

### Build a Basic Class Component
```javascript
import React, { Component } from 'react'

class App extends Component{
  render(){
    return(
      <>
        <h1>A Basic Class Component</h1>
      </>
    )
  }
}

export default App
```
- Create a blueprint of the desired app

## Make it more dynamic

- store the data
```javascript
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
```
- use an array for the list of items
```javascript
    this.state = {
      adultMenu: ["collard greens", "fried okra", "steak", "andouille sausage"],
      kidMenu: ["hot dogs", "okra tots", "mac-n-cheese", "chicken nuggets"]
    }  
```
- use hof to access the values
```javascript
        <ul>
          {this.state.adultMenu.map(value => {
            return <li>{value}</li>
          })}
        </ul>
```

## Add additional components to hold repetitive logic
- create a folder called components
- create a file in components to store the logic
- use props to pass data to the child component in its component call

  > use a variable to store the state object on the parent component

  > reference the variable in the child component with `this.props.variable-name`
 
## Add the button feature
- Add a button tag to the values
- Designate a space to store the data
  > use a html tag to designate a space for the data to appear

  > create an empty array that will be filled from clicking the button

To pass info back up to the parent component from the child component, use functional props
## Functional props
- create a custom function
- pass it through the component call
- reference the function with `this.props` on child component
- use an anonymous function to prevent immediately invoking the function, this allows clicking the button to trigger the function
- make sure the function has an argument
- update the function to change the state object with `this.setState`

