// JavaScript Class Inheritance 5/19/22 

// Object Oriented Programming - OOP
// Leverages the philosophical concept of the realm of forms to allow us to create classes that instantiate individual objects. 

// Inheritance 
  // Classes can be representative of ideas but sometimes the ideas need to have specific alterations that are unique to a subset of the objects.

  // Inheritance is the relationship that classes can have between one another. 
    // Parent classes information only flows downstream toward the children 
    // children do not share information with one another
    // Children cannot pass their information to their parents.
  

    //    Animal
//      /       \ 
//  Reptile    Mammal
//            /       \
//        Capybara   Orca


// Parent class of Animal
// common:
// are alive
// can die
// eat
// has organs

class Animal {
  constructor(nameParam){
    this.isAlive = true
    this.hungry = true
    this.name = nameParam
  }
  eat(){
    if( this.hungry === true ) {
       this.hungry = false
       return "nom nom nom"
    } else {
      return "You are already full"
    }
  }
  death(){
    this.isAlive = false
    return `I am so sorry ${this.name}, you are dead`
  }
}

// inheritance syntax is the keyword EXTENDS
//          New Key Word
//              v
class Reptile extends Animal{
  constructor(reptileNameParam, venomBoolean, poisonBoolean){
    super(reptileNameParam)
//  New Key word super()
      // super is a method that live inside of the constructor of the child class
      // super is in charge of running the parents constructor method
    this.isVenomous = venomBoolean
    this.isPoisonous = poisonBoolean
  }
}

let aligator = new Reptile("Aligator", false, false)

// console.log(aligator)

// Mammal
  // warm blood
  // mammary glands -- 
  // lungs - boolean --
  // can be aquatic -- boolean
  // sweat glands -- boolean
  // fuzzy -- boolean
  // flight

class Mammal extends Animal {
  constructor(mammalNameParameter, aquaParam=false, fuzzyParam=true){
    super(mammalNameParameter)
      this.warmBlooded = true
      this.isAquatic = aquaParam
      this.isFuzzy = fuzzyParam
      // this.isBat = false
  }
  movement(){
    if ( this.isAquatic === true ) {
      return "Just Keep Swimming"  
    } else {
      return "Just walk on those little legs"
    }
  }
}
 
// let sheldon = new Mammal("Booger")

// console.log(sheldon)

var orca = new Mammal("Shamu", true, false)
// console.log(orca)
// console.log(orca.eat())
// console.log(orca.eat())
// console.log(orca.death())
// console.log(orca)
// the state of Shamu is described by the values of the keys in the object being updated over time. 


var capybara = new Mammal("Jorge")

console.log("state of Jorge", capybara)
console.log(capybara.eat())
console.log("state of Jorge", capybara)
console.log(capybara.movement())
console.log("state of Jorge", capybara)

// console.log(capybara.method())

var sphinxCat = new Mammal("Beckley", false, false)