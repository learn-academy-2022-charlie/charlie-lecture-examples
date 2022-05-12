// Javascript Loops 5/12/22

// iteration: executing a set of instructions a number of times
// for loop: is a tool for iteration
// let: another variable declaration (like var)

// For loop anatomy
  // for - Keyword built by Javascript developers
  // parentheses () - Where arguments go
    // define how many times the for loop will run
    // Where the count(index) starts
    // How many iterations we want the loop to go through
    // What to do after each loop
  // code block - {}
    // the set of javascript instructions / code to be run with each loop
  //  for(run this many times){do these things each time}
//___________________________________________________

// incrementor ++  go up by one

  for(let index = 0; index < 100000; index++){
    console.log(index)
  }

//___________________________________________________

// decrementor -- go down by one
for (let index = 10; index > 1; index--) {
  console.log(index)
}

//___________________________________________________




var rickRolled = `We're no strangers to love You know the rules and so do I(do I) A full commitment's what I'm thinking ofYou wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching, but you're too shy to say it(say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it
And if you ask me how I'm feeling
Don't tell me you're too blind to see
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you`

var rickArray = rickRolled.split(" ")

for(let index = 0; index < rickArray.length; index++){
  console.log(rickArray[index])
}


//___________________________________________________


var randomNums = [3,8,11,12,15,55,42,24]

for(let index = 0; index < randomNums.length; index++){

  if( randomNums[index] % 2 === 0){
    console.log("The number is Even!")
  } else {
    console.log("odd", randomNums[index])
  }

}

//___________________________________________________

var dogString = "Sheldon is a booger"

for(let index = 0; index < dogString.length; index++){
  console.log(dogString[index])
}

//___________________________________________________

// Incremeting by a custom number 
for(let i = 0; i < 100; i = i + 2) {
  console.log(i)
}

