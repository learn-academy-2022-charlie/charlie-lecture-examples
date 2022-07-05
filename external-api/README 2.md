# Fetch and external API's 6/27/22
- API: Application Program Interface
  - Api provides information
  - API does not have a view or an user interface

- UI: User Interface
  - Allows user's (humans generally) to interact with some kind of program

## Fetch API
- Fetch is asynchronous and creates a queue of objects that will resolve into other objects.
- The Request Object
- The Response Object

## Promises
- Fetch immediately gives us an object called a promise
- Promise is a javascript Object
- Promises will either return 
  - a payload of data (ex. json, HTML, or JSX)
  - an error

### Promise States
  - Promises always start in a state called "Pending"
  - Promises resolve into states 
    - Successful Request : "Fulfilled"
    - Error : "Rejected"


## Fetch syntax

```javascript
 fetch("https://ipapi.co/json/apikey")
    // Fetch takes a url as it's first argument
   // The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.   
  // payload is the successful data we are waiting for.
  // .catch() for console logging our errors
    .then(response => response.json())
    .then(payload => this.setState({ip: payload}))
    .catch(error => console.log(error))
```

### Nasa API



- Set up some kind of scaffold for our Nasa Api Images
  - create a react class component
- Choose an api (probably mars rover cause it's dope)
  - Create some mock data using the api response
- set up some method logic for fetching the json data
 - button
 - life cycle method
- render images using map
- Hide our api key from github using our env file