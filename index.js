function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } // for loop
  return array
} // theBeatlesPlay

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`
    ++i
  } // while loop
  return facts
} // johnLennonFacts

function iLoveTheBeatles(number) {
  var array = []

  do{
    array.push(`I love the Beatles!`)
    ++number
  } while(number < 15)
  return array
}
