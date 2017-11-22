var letterConstructor = require('./letterConstructor');


var StartGame = function(){

	this.wordBank = ["backwords", "online", "radio", "sold", "cruise", "wanted",
	"unforgettable", "stay", "vacation", "beaching"];

	this.chosenWord = function(){

		return this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		
	};
};

module.exports = StartGame;



	
