// Javascript Classes 5/16/22

// Classes are recipes for objects. They will house a dynamic format for all the objects that will be created using the class.  

// Classes use PascalCase to declare a class.

// Pseudo code:  SuperHero class 
  // super powers : laser eyes, flight, super strenght
  // costume ; red white and blue
  // name
  // Secret Identities
  // capes : true
  // lairs : artic
  // side kick : dog
  // origin stories : alien
  // weakness : green rock

// Pseudo code:  SuperHero class
  // super powers : invulnerabilty 
  // costume : silver skin
  // name
  // Secret Identities
  // capes : no
  // lairs : space
  // side kick : surfboard
  // origin stories : alien
  // weakness : friendship

  // In order to eclare a class in JavaScript we use the keyword
    // keyword class
    // name of the class
    // curly brackets

  // class SuperHero {

  // }

// constructor method is the first method declared in our class
// class SuperHero {
//   constructor(){

//   }
// }

// Inside our constructor we can save sepcial variables that refer to the object we WILL be making.  
  // JS keyword : This
    // this refers to the object that the key is a part of

// class SuperHero {
//   constructor() {
//     this.superPowers = "jumping really high and shooting webs",
//     this.costume = "red and blue",
//     this.originStory = "uncle died, and now he roams around queens jumping really high"
//   } 
// }

// to call on our class and make a new object we use a special syntax
  // declare a variable 
    // assign the variable to the keyword new and the name of the class that was already declared and written out

// var spiderman = new SuperHero
// console.log(spiderman)

// var docStrange = new SuperHero
// console.log(docStrange)


// class SuperHero {
//   constructor(superPowerArray, capeBoolean, originStoryString, ageNumber) {
//     this.superPowers = superPowerArray
//     this.cape = capeBoolean
//     this.originStory = originStoryString
//     this.age = ageNumber
//   }
// }

// Example of what not to do -- Bad communication
// class SuperHero {
//   constructor(x, y, z, q) {
//     this.superPowers = x
//     this.costume = y
//     this.originStory = z
//     this.age = q
//   }
// }

// var docStrange = new SuperHero
// console.log(docStrange)
// output --> SuperHero {
              // superPowers: undefined,
              //   costume: undefined,
              //     originStory: undefined,
              //       age: undefined
              // }

// var docStrange = new SuperHero(["Magic", "Time Stone", "MD"], true, "Went on a journey to heal himself, found magic", 42)
// console.log(docStrange)

// var docStrange = new SuperHero(42, "Dark blue and red from like the 1600's", "Went on a journey to heal himself, found magic", ["Magic", "Time Stone", "MD"])
// console.log(docStrange)

// var wolverine = new SuperHero(["Fast Healing", "Claws", "Adamantium Skeleton", "Imortality", "friendship", "Canadian"], false, 'Killed his dad, joined the military', 'unkown')

// console.log(wolverine)
// console.log(wolverine.originStory)
// console.log(wolverine.superPowers)
// console.log(typeof wolverine.superPowers)

// Classes can also create custom Methods --
  // a method is a function that operates on the class it is a part of
  // to create a method we declare a key with parenthese and curly brackets outside of the constructor but inside of the scope of the class. 
  // methods can take in dymanic data via parameters but they also have access to all the data present in the class. 

class SuperHero {
  constructor(superPowerArray, capeBoolean, originStoryString, ageNumber, nameString) {
    this.superPowers = superPowerArray
    this.cape = capeBoolean
    this.originStory = originStoryString
    this.age = ageNumber
    this.name = nameString
    this.isAlive = true
  }
  storyTime(){
    return `${this.name} has some unique super powers including ${this.superPowers
      }. ${this.name}'s origin story is ${this.originStory}` 
  }
  lostAFight(){
    this.isAlive = false
  }
}

var hulk = new SuperHero(["Regeneration", "More angry = More strong", "Scientist?"], false, "Gamma radiation overload", 30, "Hulk")

// console.log(hulk.storyTime())
// output --> Hulk has some unique super powers including Regeneration,More angry = More strong,Scientist?. Hulk's origin story is Gamma radiation overload

const magneto = new SuperHero(["Manipulate Magnetic Fields", "Genius", "Astral Projection"], true, "Family Killed during WW2, bent on making the world mutant only", 91, "Magneto")

console.log(magneto)
console.log(magneto.storyTime())
magneto.lostAFight()
console.log(magneto)