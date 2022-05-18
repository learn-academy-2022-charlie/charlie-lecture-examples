// setup
//  $  cd <repositoryName> //this is the repo you will push your work in gitHub
//  $  git checkout main
//  $  git pull origin main
//  $  git checkout -b <branchName>
//  $  mkdir <repositoryName> //this repo will store your test suite
//  $  cd <repositoryName>
//  $  touch <fileName with the extension .test.js>
//  $  code .
//  $  yarn add jest


// Test Driven Development TDD - breaks code into a series of tests.
// Process - Create test, make it pass, refactor

// const { describe } = require("yargs")

// Unit testing - testing individual pieces of the code

// Consider three thing
// Input
// The result received
// The expected output

// Jest - automated testing, created by Facebook to test React applications

// YARN - Yet Another Resource Negotiator - a package manager for your code

// Red-green-refactor process
// 1: Write the test first!
// describe() method - a string that states the function name and a callback function
// describe("soup", () => {})

// it() method - nested in the code block of the desribe method(), a string describing what the functio is doing and a callback function
// describe("soup", () => {
//   it("returns a string that says Aloha, Charlie2022, here's some soup!", () => {})
// })

// expect() method with a jest matcher appended at the end
describe("soup", () => {
  it("returns a string that says Aloha, Charlie2022, here's some soup!", () => {
    expect(soup()).toEqual("Aloha, Charlie2022, here's some soup!")
  })
})

// 2: Run your testing suite to see a failing test
// $ yarn jest

// If you see an error message that
// FAIL  ./foundations.jest.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

//     at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//         at Array.map (<anonymous>)

// Look through your code for the yargs helper code, delete or comment it out. Note if you comment it out, it should prevent additional yargs from appearing.

// const { describe } = require("yargs")

// Good failure
// FAIL  ./foundations.jest.test.js
// soup
//   ✕ returns a string that says Aloha, Charlie2022, here's some soup! (1 ms)

// ● soup › returns a string that says Aloha, Charlie2022, here's some soup!

//   ReferenceError: soup is not defined

// 3: Write the code

// **********Pseudocode********
// declare a function named soup
// input - none because when the function is called, I want to instantly give an output
// output - string that states "Aloha, Charlie2022, here's some soup!"
// return that statement

const soup = () => {
  return "Aloha, Charlie2022, here's some soup!"
}

// 4: Run your testing suite to see your test pass
// $ yarn test

// Passing test
// PASS  ./foundations.jest.test.js
// soup
//   ✓ returns a string that says Aloha, Charlie2022, here's some soup! (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// 5: Refactor if necessary

// This is known as Red-Green Refactor

// Prompt: write a function that combines two arrays and then sorts it in ascending order.

// Process

// 1: Write the test first!
describe("combined", () => {
  it("that combines two arrays and then sorts it in ascending order", () => {
    var soupList = ["gumbo", "chicken noodle", "chili", "cereal", "lentil soup"]
    var moreSoup = ["tomato soup", "clam chowder"]
    // expected output = ["cereal", "chicken noddle", "chili", "clam chowder", "gumbo", "lentil soup"]
    expect(combined(soupList, moreSoup)).toEqual(["cereal", "chicken noodle", "chili", "clam chowder", "gumbo", "lentil soup", "tomato soup"])
  })
})

// 2: Run your testing suit to see a failing test

// FAIL  ./foundations.jest.test.js
// soup
//   ✓ returns a string that says Aloha, Charlie2022, here's some soup! (1 ms)
// combined
//   ✕ that combines two arrays and then sorts it in ascending order


// 3: Write the code
// Pseudocode
// function named combined
// input ---> two parameters - arrays
// output ---> arrays combined and sorted
// concat to combined the two arrays
// sort will alphabetize the combined arrays

// const combined = (array1, array2) => {
//   return array1.concat(array2).sort()
// }

// const combined = (soupList, moreSoup) => {
//   return soupList.concat(moreSoup).sort()
// }

// This function passes but needs to be refactored
// const combined = (array1, array2) => {
//   let arrayConcat = array1.concat(array2)
//   let concatSorted = arrayConcat.sort()
//   return concatSorted
// }

// 4: Run your testing suit to see your test pass
// $ yarn 

// 5: Refactor if necessary
// Use dynamic, reusable parameters and code that will allow different inputs work within the function, practice the DRY technique(Don't Repeat Yourself), use less lines

const combined = (array1, array2) => {
  return array1.concat(array2).sort()
}

// To make a pull request
// $ cd .. //go back to the repo level to run git commands
// $ git status
// $ git add <file-name>
// $ git commit -m "descriptive message about the changes"
// $ git push origin <branch-name>
// Follow the directions on gitHub for pull request
