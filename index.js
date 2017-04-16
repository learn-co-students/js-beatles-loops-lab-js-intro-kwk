function theBeatlesPlay(musicians,instruments){
  var emptyArray=[]
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}
function johnLennonFacts(facts) {
var counter=0
  while (counter<facts.length) {
    facts[counter]=facts[counter]+'!!!'
    counter++
  }
  return facts
}
function iLoveTheBeatles(numberIn){
  var array=[]
  do{array.push("I love the Beatles!")
  numberIn++
} while(numberIn<15);
return array
}