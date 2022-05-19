// Write a class that calculates the volume of a Cylinder to four decimal places.Volume of a cylinder: V = πr2h(r is the radius and h is the height of the cylinder)

//pseudocode
// creating a class named Cylinder
  // Constructor needs to take in some values to work with
  // need height
  // need radius

// V = πr^2h
// need to get a float to four decimal places 
  // have pi
  // have 2
//[Floating point math](https://www.youtube.com/watch?v=s9F8pu5KfyM)
// number sub datatype is called Float
  // Float a number with a decimal point


  class Cylinder{
    constructor(height, radius){
      this.height = height,
      this.radius = radius
    }
    calculateVolumn(){
      return parseFloat((this.radius ** 2 * this.height * Math.PI).toFixed(4))
    }
  }

var cyl1 = new Cylinder(47, 1)
console.log(cyl1)
console.log(cyl1.calculateVolumn())

var cyl2 = new Cylinder(4,58)
var cyl3 = new Cylinder(47, 100)

console.log(cyl2.calculateVolumn())
console.log(cyl3.calculateVolumn())