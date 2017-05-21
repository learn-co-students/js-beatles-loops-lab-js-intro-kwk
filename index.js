function theBeatlesPlay(musicians, instruments) {
	var plays = [];
	for (var i = 0; i < musicians.length; i++) {
		var say = musicians[i] + ' plays ' + instruments[i];
		plays.push(say)
	}
	return plays
}

function johnLennonFacts(facts) {
	var i = 0;
	while (i < facts.length) {
		facts[i] += "!!!";
		i++
	}
	return facts
}

function iLoveTheBeatles(n) {
	var loveBeatles = [];
	if (n > 15) {
		n = 0
	}
	while (n >= 0) {
		loveBeatles.push("I love the Beatles!")
		n--
	}
	return loveBeatles
}
