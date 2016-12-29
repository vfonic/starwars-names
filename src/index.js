var starWarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var randomName = uniqueRandomArray(starWarsNames);

module.exports = {
	all: starWarsNames,
	random: random,
	first: starWarsNames[0]
}

function random(numberOfRandomNamesToReturn) {
	if (numberOfRandomNamesToReturn) {
		var randomNames = [];
		for(var i = numberOfRandomNamesToReturn; i--;) {
			randomNames.push(randomName());
		}
		return randomNames;
	} else {
		return randomName();
	}
}
