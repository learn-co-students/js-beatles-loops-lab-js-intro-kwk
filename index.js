function theBeatlesPlay(musicians, instruments){
  var play = []
  for(var i = 0; i < musicians.length; i++ ){
    play.push(musicians[i] + " plays " + instruments[i])
  }
  return play
}

function johnLennonFacts(facts){
  var updatedFacts = []
  var i = 0
  while(i < facts.length){
    updatedFacts.push(facts[i] + "!!!")
    i++
  }
  return updatedFacts
}

function iLoveTheBeatles(number){
  var beatleLove = []
  do {
    beatleLove.push("I love the Beatles!")
    number++
  } while(number < 15)
  return beatleLove
}
