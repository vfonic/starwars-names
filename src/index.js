import starWarsNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';

const randomName = uniqueRandomArray(starWarsNames);

module.exports = {
	all: starWarsNames,
	random,
	first: starWarsNames[0]
}

function random(numberOfRandomNamesToReturn = 1) {
	let randomNames = [];
	for(let i = numberOfRandomNamesToReturn; i--;) {
		randomNames.push(randomName());
	}
	return randomNames;
}
