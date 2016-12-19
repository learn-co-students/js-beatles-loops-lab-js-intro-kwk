function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return empty;
}

function johnLennonFacts (facts) {
  var countdown = facts.length - 1;
  while (countdown >= 0) {
    facts[countdown] += '!!!';
    --countdown;
  }
  return facts;
}

function iLoveTheBeatles (number) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    ++number;
  }
  while (number < 15);

  return empty;
}
