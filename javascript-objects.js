// JavaScript Objects 5/18/2022

// Data Types
// Primitive - cannot be broken down any further
// Number
// String
// Boolean
// Undefined
// Null
// Symbol - unique identifiers

// Array - collection
// Object - data type anything that is a collection

// CSS:
// h1 {
//   color: "purple"
// }

// Object structure - {} with key:value pairs

// {key1: "value1", key2: "value2", key3: "value3"} - in an object I can get back one piece of info by referencing the key

// [2, 3, 4, 5] - in an array, I can get one piece of info by referencing the index

const pets = {stephen: "Absalom", michael: "Chispita", jorge: "Yogi"}
// console.log(pets) // --> full object
// to get one item - name of the object and the key
// console.log(pets.michael) --> "Chispita"
// console.log(pets.stephen) --> "Absalom"

// object with additional objects as values are called nested objects
const breakfast = {
  bfast1: "waffles",
  bfast2: "eggs",
  bfast4: "nothing",
  bfast5: {
    beverage1: "coffee",
    beverage2: "bloody mary",
    beverage3: "OJ",
    beverage4: {
      mimosa1: "Guava",
      mimosa3: "Mango",
      mimosa2: "Pineapple",
      mimosa4: "Strawberry"
    }
  },
  bfast3: "biskets and gravy",
  bfast6: [4, 5, 6, 7]
}
// console.log(breakfast.bfast5)
// console.log(breakfast.bfast5.beverage2)
// console.log(breakfast.bfast5.beverage4.mimosa1)
// console.log(breakfast.bfast6[0])

// console.log(breakfast.bfast5.beverage4.mimosa1)
// console.log(breakfast.bfast5.beverage4.mimosa2)
// console.log(breakfast.bfast5.beverage4.mimosa3)
// console.log(breakfast.bfast5.beverage4.mimosa4)

// Destructuring - attaching a pathway to a key
// const { mimosa1, mimosa2, mimosa3, mimosa4 } = breakfast.bfast5.beverage4
const { mimosa4 } = breakfast.bfast5.beverage4

// console.log(mimosa1)
// console.log(mimosa2)
// console.log(mimosa3)
// console.log(mimosa4)

// Methods - a functions that belong to an object (class)
// Objects can hold data as well as behavior (function)
// To reference a value - name of the object and the key
// this - a keyword in JavaScript that is a reference to object when you are inside the object

const numberObj = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}
// console.log(numberObj.num1)
// console.log(numberObj.addUp) - will return the function
// console.log(numberObj.addUp()) - will execute the function



const petsAgain = [
  {name: "Absalom", age: 1, type: "dog"},
  {name: "Chispita", age: 7, type: "dog"},
  {name: "Yogi", age: 10, type: "dog"},
  {name: "Bently", age: 1, type: "cat"}
]
// console.log(petsAgain)
// console.log(petsAgain.length)
// console.log(petsAgain[1]) // { name: 'Chispita', age: 7, type: 'dog' }
// console.log(petsAgain[2].name)

// Iteration - doing something over and over again until a condition is met

const petNames = (array) => {
  return array.map(value => {
    return value.name
  })
}
// console.log(petNames(petsAgain))
// --> [ 'Absalom', 'Chispita', 'Yogi', 'Bently' ]

// map and filter can take the parameters of value, index, array

const onlyDog = (array) => {
  return array.filter(value => {
    return value.type === "dog"
  })
}
console.log(onlyDog(petsAgain))
