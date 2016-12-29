var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
	describe('all', function() {
		it('should be array of strings', function() {
			expect(starWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should always have Luke Skywalker', function() {
			expect(starWars.all).to.include('Luke Skywalker');
		});
	});

	describe('random', function() {
		it('should return a random name from starWars.all', function() {
			var randomItem = starWars.random();
			expect(starWars.all).to.include(randomItem);
		});

		it('should return an array of random items if passed a number', function() {
			var randomItems = starWars.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(randomItem) {
				expect(starWars.all).to.include(randomItem);
			});
		});
	});
});
