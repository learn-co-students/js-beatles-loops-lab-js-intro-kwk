function theBeatlesPlay(musicians, instruments) {
  var arr = new Array();
  for (let i = 0; i < musicians.length; ++i) {
    arr.push(musicians[i] + " plays " + instruments[i])

  }
  return arr
}

function johnLennonFacts(facts) {
  var arr = new Array();
  var counter = 0;
  while (counter < facts.length) {
    arr.push(facts[counter] + "!!!")
    ++counter
  }
  return arr
}

function iLoveTheBeatles(num) {
  var arr = new Array();
  do {
    arr.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  return arr;
}
