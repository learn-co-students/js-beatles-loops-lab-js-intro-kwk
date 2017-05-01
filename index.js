function theBeatlesPlay(musicians,instruments){
  var array=[]
  for (var i = 0; i < musicians.length; i++) {
    array[i]=`${musicians[i]} plays ${instruments[i]}`
  }
    return array
}

function johnLennonFacts(facts){
  var array=[]
  while(facts.length>0){
    array.push(`${facts.shift()}!!!`)
  }
  return array
}

function iLoveTheBeatles(n){
  var array=[]
  if (n>15){n=0}
  do {
    --n
    array.push("I love the Beatles!")}
    while(n>-1)
    return array
}
