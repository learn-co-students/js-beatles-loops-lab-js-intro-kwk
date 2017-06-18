var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
  var musicPhrases = []
  for(var i = 0; i < musicians.length; i++){
    musicPhrases.push(musicians[i] + " plays " + instruments[i])
  }
  return musicPhrases
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
let i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while(n < 15)
  return array
}

/* Then, implement a do-while loop inside the function that adds
`"I love the Beatles!"` to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than `15`.
The function should return the array with the strings `"I love the Beatles!"`.*/
