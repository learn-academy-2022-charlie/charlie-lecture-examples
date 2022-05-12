// JavaScript Arrays 5/12/22

// Variables
// variables have four parts
var myCar = "Subaru Outback"
var seanCar = "Acura"
// console.log(seanCar)
var jennerCar = "Honda Civic"
// console.log(jennerCar)
var ivanCar = "Subaru WRX"
// console.log(ivanCar)
var deniseCar = "VW Passat"
// console.log(deniseCar)

// Composite Data Types
  // to hold more than one piece of data within itself
// Array
  // Is a list of items organized according to a set of numbers
var array = []
// 
var carArray = [myCar, seanCar, jennerCar, ivanCar, deniseCar]
// console.log(carArray)

//___________________________________________________________

// The comma in the array spereates the pieces of Data
// var streetNames = ["Broadway", "Elm", "Jump", "Rosecrans", "Welcome", "Seseame", "Washington"]

// Index - [0]
// [i] is like an address for data inside of an array

//                     i
//                     0         1       2         3           4          5          6     
var streetNames = ["Broadway", "Elm", "Jump", "Rosecrans", "Welcome", "Seseame", "Washington"]

// console.log(streetNames[0])
// console.log(streetNames[1])
// console.log(streetNames[2])
// console.log(streetNames[3])
// console.log(streetNames[4])
// console.log(streetNames[5])
// console.log(streetNames[6])
// console.log(streetNames[7])
// console.log(streetNames[3500])

//___________________________________________________________
// Array Methods
  // Mutators and Accessors

  // Mutators change the orignial array permanetly 
  // Accessors give us back new data without changing the original array
//___________________________________________________________
// MUTATOR - .push()
  // Adds another piece of data onto the end of the array
var colorsArray = ["Purple", "Ron Burgnady", "Slap your face, Salmon", "Black", "Magenta"]
  console.log(colorsArray)
  
  // colorsArray.push("Van dyke brown")
  // console.log(colorsArray)

//___________________________________________________________
// MUTATOR - .pop()
  // removes the last item from the array
    // Notice how the method does not take an argument!
    //              v
  // colorsArray.pop()
  // console.log(colorsArray)

//___________________________________________________________
// MUTATOR - .shift()
  // Removes the piece of data at the Zeroth index
    // colorsArray.shift()
    // console.log(colorsArray)
//___________________________________________________________
// MUTATOR - .reverse()
  // reverses the order of the array
// colorsArray.reverse()
// console.log(colorsArray)
//___________________________________________________________
// Accessors - indexOf()
  // Finds the first instance of a piece of data within a given array
//  v                     v
// colorsArray.indexOf("Ron Burgandy")
    // indexOf returns to use the location of the item in the array
// console.log(colorsArray.indexOf("Ron Burgnady"))
// console.log(colorsArray.indexOf("Black"))
    // when we look for something that is not present in the array we recieve a -1
// console.log(colorsArray.indexOf("Hello"))
// console.log(colorsArray.indexOf("Ron"))

//___________________________________________________________
// Accessors - join()
  // takes an array and turns it into a string that looks different depending on the argument we pass to it

var myName = ["A", "u", "s", "t", "i", "n"]

console.log(myName.join())
console.log(myName.join(""))
console.log(myName.join(" "))
console.log(myName.join("s"))

//___________________________________________________________
// Accessors - split()
  // takes an string and turns it into a array that looks different depending on the argument we pass to it
var myName = "Austin"

console.log(myName.split())
console.log(myName.split(""))
console.log(myName.split(" "))
console.log(myName.split("s"))