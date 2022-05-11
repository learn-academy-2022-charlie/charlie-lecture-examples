// Javascript Introduction Lecture 5/11/2022 - Charlie Cohort
// (using double slash is how we make comments)

// JavaScript =/= Java
// Javascript was created in the early 1990's and named after the language Java trying to ride the hype train. 
// Javascript is now under the control of ECMA-- currently on version ES6
// Javascript is an interpreted language 
// Javascript is a dynamic language 
// Javascript is an scripting language

// data: infromation about something

// Javascript has two kinds of Data
  // Composite Data Types
    // Object
    // Array
  // Primitive Data Types
    // Number - e.g 1
      1
      // Float 0.1
    // String - e.g "Surfboard"
      // Strings ALWAYS use quotes in javascript
      "Surfboard"
    // Boolean - true , false
      // words true and false do NOT use quotes
      true 
      false
    // Undefined - a piece of data that has not yet been defined by anything else
      undefined
    // Null - Null is not zero, it's not something, it's not nothing, it's null
      null
    // Symbol  :symbol - Is a refence point to another piece of data
    

// Deeper Dive

// right click in Chrome and choose inspect
// on the top select "console" and you can use this as a javascript sandbox

// Number
1
// Mathmatical Operator
  // + Addition
    1 + 1  // --> output 2
  // - Subtraction
    1 - 1  // --> output 0
  // * Multiplication
    2 * 9  // --> output 18
  // / Division 
    9 / 2 // --> output 4.5
  // % Modulo (mod)
    3 % 2  // --> output 1
    5 % 2  // --> output 1
    25 % 5  // --> output 0

// String
  // An assortment of characters ("a", "b", "c" ...) stored inside of quotation marks that work well as human readable text
"Hello Charlie, how are you today?"

// Srings can be concatenated together using the + symbol
"Hello" + "Charlie" //  --> output 'HelloCharlie'
"Hello" + " " + "Charlie" // --> output  'Hello Charlie'
"Hello" + " Charlie" // --> output  'Hello Charlie'

// Strings also include the characters for numbers
"This is your 3rd day "

// Strings have properties like length
"Davon".length // --> output  5
"Michael".length // --> output  7
"Stephen           ".length // --> output  18

// Strings have the ability to access different characters using their INDEX
  // index notation is square brackets plu s a number inside the square brackets 
  // strings are zero indexed

"Denise"[0] // --> output  'D'
"Denise"[5] // --> output  'e'
"Denise"[4] // --> output  's'

// Built-In Methods
  // actions with special names appended to pieces of data
  // built in methods are ALWAYS followed up with parenthese()
"damien".toUpperCase() // 

  // possibly the most important built in method is
  //  console.log()
  //  console.log(code I want to see the result of goes here)
console.log("damien".toUpperCase()) // -- > output 'DAMIEN'
  // we can use an interperter to run this code and see a result
    // in the terminal
      // $ node javascript-introduction.js
      console.log("I'm Going to Disneyland")
      console.log("I'm Going to Disneyland".includes("land"))// -- > output true
      console.log("I'm Going to Disneyland".includes("Land"))// -- > output false
                                                  //  ^
                                                // Capital L
        // number of where it's at in the string?
        // boolean? --> dope
        // "yes"? 

// Variables
  // Variable Declaration - var
      // this is akin to us saying to Javascript: "Hey I need to make a new variable"
  
  // Variable Name - it can be (almost) anything 
    // The naming convention is to use camelCase. This convention is used for almost everything in JavaScript. 
    var myNumber
    var x
    var y
    var batman
    var myName
    var myCustomCamelCaseVariableName
      // variable names are custom place holders for primitive or composite data
  
  // Assignment Operator = - it's really similar to something we already know
    // var myNumber = 
      // this is how we assign the variable to the data associated with it

  // Data - either one of the six primitive data types, or two composite data types 
    var myNumber = 27
        myNumber = myNumber + 5
        console.log(myNumber) //32
        myNumber = myNumber + 5
        console.log(myNumber + 5 ) // 37
        
        var consoleInfo = "Hey show this information"
        console.log(consoleInfo)

// Boolean
    true
    false
  // Booleans Help us Evaluate logical statements
    // equality operators ==, ===
      // loose equality ==
      // allows for differently typed data to be compared
        console.log(4 == 3) //false
        console.log(3 == 3) //true
        console.log('3' == 3) //true

      // strict equality ===
      // differently typed data will always be false
        console.log(4 === 3) //false
        console.log(3 === 3) //true
        console.log('3' === 3) //false

      // Type Coercion 
      //  The forced transformation of data types in JavaScript
      console.log(2 + 2) // 4
      console.log('2' + 2) // '22'
      
      // Relational Opperators
        // alwasy returns to us a boolean value
      var number = 15
      var bigNumber = 1500
        // greater than symbol >
          console.log(number > bigNumber)
        // Less than symbol
          console.log(number < bigNumber)
        // greater than or equal to symbol >=
          console.log(number >= bigNumber)
        // Less than or equal to symbol <=
          console.log(number <= bigNumber)

      // Logical Operators
        // AND -> &&
          console.log(true && true) // true
          console.log(number < bigNumber && 10 > 3) // true
          console.log(true && false) // false
          console.log(number === 15 && bigNumber === 1400) // false
        // OR -> ||
           console.log(true || true) // true
          console.log(number === 15 || bigNumber === 1400)  // true
        // NOT -> !
          console.log(!true) // false
          console.log(!false) // true
          console.log(true != false) // true
          console.log(!false != false) // true
          console.log(!false && false != true)  // true

      //DON and the class were here!