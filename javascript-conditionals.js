// Javascript conditionals - decision trees/if-else statement/conditionals
// The condition makes a true or false evaluation using Boolean value

// Operators
// Strict equality ===
// console.log(22 === 13 + 10)

// Relational > < >= <=
// console.log(22 > 13 + 10)

// Logical operators And &&, Or ||, Not(Bang operator) !
// console.log(22 > 13 + 10 && 22 === 22)
// console.log(22 > 13 + 7 && 22 === 22)

// variable to store
// var favYear = 2022
// console.log(favYear === 2020) 
// console.log(favYear === 2020 || favYear === 2022) 
// console.log(!(favYear === 2020 || favYear === 2022)) 
// console.log(!(favYear === 2020 || favYear === 2021)) 

// if - keyword that takes in a condition () and outputs executable code {} also known as code block
// if(favYear === 2022) {
//   console.log("So true, 2022 is the best year ever!!!")
// } 

// if(favYear === 2021) {
//   console.log("So true, 2022 is the best year ever!!!")
// } 

// else - keyword that does not have a condition, a catchall to give executable code if other conditions are not true 

// if(favYear === 2021) {
//   console.log("So true, 2022 is the best year ever!!!")
// } else {
//   console.log("I am the else")
// }

// else if - keyword that has a condition and a code block
// var favYear = 1977

// if(favYear === 2022) {
//   console.log("So true, 2022 is the best year ever!!!")
// } else if (favYear === 2020) {
//   console.log("Cover your mouth!")
// } else if (favYear === 1977) {
//   console.log("Woohoo, Jorge enter the world!")
// } else {
//   console.log("I am the else")
// }

// Be mindful of the order
var grade = 82
if(grade >= 95) {
  console.log("A")
} else if(grade >= 90) {
  console.log("B")
} else if(grade >= 80) {
  console.log("C")
} else if(grade >= 70) {
  console.log("D")
} else {
  console.log("F")
}
