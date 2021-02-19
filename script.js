//connect "guess" to button "random" function
document.getElementById('button').addEventListener('click', randomizer)
let  randomNumber = 0
let userGuess = 0

function randomizer() {
  //get number typed in by userand convert to an integer
userGuess = document.getElementById('input')           .value
userGuess = parseInt(userGuess)

//generate ranom number between 1 and 6
randomNumber = (Math.random() * 6) + 1
randomNumber = parseInt(randomNumber)
if (userGuess== randomNumber) {
  //compare user's guess with random number
  document.getElementById('answer').innerHTML = 'correct'
  }  
}
