// Higher Order Functions 5/16/22

// Higher Order refers to the fact that this is functional code that takes functional code as an argument.

// The trick to Higher Order Functions is that they only work on arrays. 

//.forEach(() => {})
// .map(() => {})
// .filter(() => {})

  // call back function () => {} as arguments
    // take three arguments themselves 
      // value - which represents the data AT each index in the array
      // index - which is the location of the data in the array
      // array - which is a copy of the array

["Hello", "There"]

var grevious = ["Ah", "The", "Negotiator"]

["Just", "a", "shirt"]


// Built in Method 
  // keywords that represent logic/ premade functions that were written by javascripts authors, and can be invoked easily

// .forEach()
  // is a tool for itteration that will do SOMETHING (we'll tell it \ what the something is ) for every itme in an array.

// HOF's take anonymus functions as arguments.

var shirt = ["The", "game", "is", "rigged", "from", "the", "start"]

// ["Just", "a", "shirt"].forEach(value => {
//   return console.log("Supercalifragilisticexpialidocious")
// })  

// shirt.forEach((value) => {
//   return console.log(value)
// })  

// shirt.forEach((value, index) => {
//   return console.log(value, index)
// })  


// .map() 
// another tool for iteration on arrays
  // map ALWAYS returns to us a NEW array of the same length

// another term for an anonymous funtion as an argument is 

var mult5 = [3,4,5,6,7,8,9]

mult5.map((value)=>{
  return value * 5
})
// --> output (7) [15, 20, 25, 30, 35, 40, 45]

var names = ["Mary", "Don", "Goku", "Frakenstien", "J. Deep", "dr. stranglove", "kirby", "Meagahn the stallion"]

names.map((value)=>{
  return value.toLocaleUpperCase()
})
// ---> output  ['MARY', 'DON', 'GOKU', 'FRAKENSTIEN', 'J. DEEP', 'DR. STRANGLOVE', 'KIRBY']

names.map((value, index)=>{
  return index
})

names.map((value, index, array) => {
  return array
})

// .filter() 
  // filter always returns to us a new array
    // BUT filter tries to make that new array shorter than the previous array.
      // filter has a built in condtioanl statememt -- only retunrs items that match the boolean statement
  
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

numbersArray.filter((value)=>{
 return value % 2 === 0
})
// ---> output [2, 4, 6, 8, 10, 12]

names.filter((value)=>{
  return value[0] === "M" || value[0].toLowerCase() === "d" 
})
// ---> output ['Mary', 'Don', 'dr. stranglove']


names.filter((value) => {
  return value[1] === "o" 
})



// What is function?
  // some code that preforms a specific task that is given a name

// What is a built in method?
  //precoded logic that was given a name by Javascript authors

// What is iteration?
  // the repetition of a task until a condtion is met

// Higher Order functions iterate over an array until they have traveresed the length of the array. 


let randomStuffArray = [6, true, "Baseball", 99, false, "no", null, undefined, ["hello", "world"], { name: "object"}, 76, 45, "texas", NaN, "Type out the word twenty in a string", "🤬"]

// Variable syntax  const gettingOdds = 
// function (little custom machine) () => {}
const gettingOdds = (array) => {
  let onlyOneType = array.filter(value => {
    return typeof value === "number" && value % 2 !== 0
  })
  return onlyOneType
}

console.log(gettingOdds(randomStuffArray))