# Getting Started with Create React App

Syllabus reference [React State](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/state.md).

- $ cd charlie-lecture-examples
- $ git status
- $ git pull origin main
- $ git checkout -b state-cb-aw
- $ yarn create react-app state-charlean-austin
- $ cd state-charlean-austin
- $ code .

Start the server for the react application
- $ yarn start

Open an additional tab in the terminal
- command + T

- Render - react life cycle method - runs automatically whenever changes are made
- JSX - hybrid between JS and HTML
- Return - outputs one item with the React fragments <> </>

- Build an app that is going to log the number of skills that prepare us for the job hunt. Job Readiness Tracker

Display component
```javascript
import React, { Component } from 'react'
import Tracker from './components/Tracker'

class App extends Component {

  render() {

    return (
      <>
        <h1>Charlie's Job Readiness Tracker</h1>
        <h2>Week 1</h2>
        <Tracker/>
        <h2>Week 2</h2>
        <Tracker/>        
        <h2>Week 3</h2>
        <Tracker/>
      </>
    )
  }
}

export default App

```

### JavaScript keywords that are used to create and access information within a class:

- constructor: a special method for creating and initializing objects, this is a life cycle method that runs automatically when the class component is invoked.
- props: keyword (properties) for passing information from one component to another
- this: a JavaScript keyword that refers to the object it belongs to
- super: within in the constructor method to create inheritance we need another keyword super() which passes the attributes from the constructor in the parent class

Logic Component
```javascript
import React, { Component } from 'react'

class Tracker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      skills:0
    }
  }
  
  addSkill = () => {
    this.setState({skills: this.state.skills + 1})
  }
  
  render() {
    return (
      <>
        <p>Skills: {this.state.skills}</p>
        <button onClick={this.addSkill}>Add that new skill set</button>
      </>
    )
  }
}

export default Tracker
```

## Merging to Remote Repository

Leave the project folder and go to the main repository (react-challenges) 
- $ `cd ..`
Push your changes
- $ `git status`
- $ `git add <file-name>`
- $ `git commit -m "created a skill tracker with display and logical components"`
- $ `git push origin <branch-name`

### Switching drivers
- $ git clone <repo code> //if you don't have it already
- $ cd into repo
- $ git fetch origin <branch-name>
- $ git checkout <branch-name>
- $ cd into the project repo
- $ yarn // to add dependencies

### Make a pull request
- Inside of the repository on GitHub, Click `Compare & pull request`
- You will then be redirected to a page where you can create a pull request. Click `Create pull request`