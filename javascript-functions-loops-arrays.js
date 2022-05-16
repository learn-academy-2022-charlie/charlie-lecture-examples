let allowance = [1, 5, 10, 20, 50]

// Iteration - repeat the logic until a condition is met

// Prompt: create a function that will multiply each number in an array by 5.

// const myNumArray1 = [2, 3, 4, 5, 6]
// const myNumArray2 = [7, 8, 9]
// const myNumArray3 = [10, 11, 12, 13]

// Psuedocode
// declare a function named mult5
// input array parameter
// Expected output:
  // const myNumArray1 = [10, 15, 20, 25, 30]
  // const myNumArray2 = [35, 40, 45]
  // const myNumArray3 = [50, 55, 60, 65]
// use for loop for iteration

// const mult5 = (array) => {
// }
// console.log(mult5(myNumArray1))
// console.log(mult5(myNumArray2))
// console.log(mult5(myNumArray3))
// Output: undefined because nothing is being returned

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(i)
//   }
// }
// console.log(mult5(myNumArray1))
// console.log(mult5(myNumArray2))
// console.log(mult5(myNumArray3))
// Output will be the count of the for loop for each index in the array

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
//   }
// }
// console.log(mult5(myNumArray1))
// console.log(mult5(myNumArray2))
// console.log(mult5(myNumArray3))
// Output will show the value of each index

const myNumArray1 = [2, 3, 4, 5, 6]
const myNumArray2 = [7, 8, 9]
const myNumArray3 = [10, 11, 12, 13]

// const mult5 = (array) => {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i] * 5)
//   }
// }
// console.log(mult5(myNumArray1))
// console.log(mult5(myNumArray2))
// console.log(mult5(myNumArray3))
// Output will be each value multiplied by 5

const mult5 = (array) => {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 5)
    // console.log(newArray) //used to show the values being pushed into the newArray, not necessary, just informational
  }
  return newArray
}
console.log(mult5(myNumArray1))
console.log(mult5(myNumArray2))
console.log(mult5(myNumArray3))
// OUTPUT: 
// [ 10, 15, 20, 25, 30 ]
// [ 35, 40, 45 ]
// [ 50, 55, 60, 65 ]