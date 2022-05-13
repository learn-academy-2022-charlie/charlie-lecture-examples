// Functions - snippets of code logic, reusable, can be called as many times as needed, produce an output
// Psuedocode - write the logic of code in plain words

// ES6 - Function expressions using the variable declarations and the arrow syntax

// Scope - policy of how a variable can be accessed

// Global - outside of the code block
// var firstWeek = "We've learn a lot!"
// console.log(firstWeek)

// if(firstWeek === "We've learn a lot!") {
//   console.log(firstWeek)
// }

// Block scope - within the {} 
// if(firstWeek === "We've learn a lot!") {
//   var firstWeek = "Greatest time of my life!"
//   firstWeek = "testing"
//     console.log(firstWeek)
//   }
//   console.log(firstWeek) //testing
// const - variable declaration, does not allow variable name to be reassigned
// const weekEnd = "Assessment time"

// if(weekEnd === "Assessment time") {
//   const weekEnd = "Assessment time"
//   console.log(weekEnd)
// }
// console.log(weekEnd) //cannot referenced outside--globally

// Function scope - each function creates a different scope

// if(weekEnd === "Assessment time") {
//   const weekEnd = "Greatest time of my life!"
//     console.log(weekEnd)
//   }

// Function expression anatomy

// const friday = () => {
//   return "Thank goodness it's Friday!"
// }

// function invocation/function call
// console.log(friday())
// console.log(friday())
// console.log(friday())
// console.log(friday())
// console.log(friday())

// Parameters - placeholders that tell function to expect an input
// string interpolation `${}`
// person is considered a parameter
// const friday = (person) => {
//   return `Thank goodness, ${person}, it's Friday!`
// }
// console.log(friday("Sean")) //"Sean is consider an argument"
// console.log(friday("Elyse"))
// console.log(friday("Stephen"))

// Pseudocoding

// Write a function called awesomeColor that takes an argument of a color returns "Oh, purple is such an awesome color!" if purple. If it is any other color, "Well, <color-name> is not as awesome as purple."

// Example:
// Input of purple ---> Output: "Oh, purple is such an awesome color!"
// Input of yellow ---> Output: "Oh, yellow is is not as awesome as purple."

// function name - awesomeColor
// input - string parameter named color
// output - string stating the value of awesomeness as compared to purple
// use string interpolation method to return statements using conditionals
// if color is purple then return "Oh, purple is such an awesome color!"
// any other color then return "Well, <color-name> is not as awesome as purple."

// const awesomeColor = (color) => {
//   if(color === "purple") {
//     return( `Oh, ${color} is such an awesome color!`)
//   } else {
//     return `Well, ${color} is not as awesome as purple.`
//   }
// }

// console.log(awesomeColor("purple"))
// console.log(awesomeColor("yellow"))

const awesome = (color1, color2) => {
  if(color1 === "purple") {
    return `Oh, ${color1} is such an awesome color! What is ${color2}`
  } else {
    return `Well, purple should always be first on the list.`
  }
}

console.log(awesome("purple", "red"))
console.log(awesome("yellow", "orange"))