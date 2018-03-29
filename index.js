let preCodeWord = ""
let firstNumbered = ""
let postCodeWord = ""
let message = "attackatdawnnnnnnn"
let count = message.length;
let keyword = "lemon"
let keywordToCOpy = ""
let keyNumbered = ""

for(var b = 0; b < message.length; b++){
	let inputWord = message[b];

	for(var i = 0; i < inputWord.length ; i++){
		preCodeWord += inputWord.charAt(i).toUpperCase() + " "

		for (var a = 0; a < 26; a++){
			let codes = {
				"A" : 0, 
				"B" : 1,
				"C" : 2,    
				"D" : 3,
				"E" : 4,    
				"F" : 5,    
				"G" : 6,
				"H" : 7, 
				"I" : 8,
				"J" : 9,
				"K" : 10,
				"L" : 11,
				"M" : 12,
				"N" : 13,
				"O" : 14,
				"P" : 15,
				"Q" : 16,
				"R" : 17,
				"S" : 18,
				"T" : 19,
				"U" : 20,
				"V" : 21,
				"W" : 22,
				"X" : 23,
				"Y" : 24,
				"Z" : 25
			}

			if(inputWord.charAt(i).toUpperCase() === Object.keys(codes)[a]) {
				firstNumbered += codes[inputWord.charAt(i).toUpperCase()] + " "
			}
		}
	}
}

for (var i = 0; i < count; i++){
	// console.log(i);
	if (i < keyword.length){
		count -= 1;
		console.log(i);
		keywordToCOpy += keyword.charAt(i).toUpperCase()
	}
	if (i === keyword.length){
		i -= 6;
	}
	if (count === 0) {
		break;
	}

	for (var a = 0; a < 26; a++){
		let codes = {
			"A" : 0, 
			"B" : 1,
			"C" : 2,    
			"D" : 3,
			"E" : 4,    
			"F" : 5,    
			"G" : 6,
			"H" : 7, 
			"I" : 8,
			"J" : 9,
			"K" : 10,
			"L" : 11,
			"M" : 12,
			"N" : 13,
			"O" : 14,
			"P" : 15,
			"Q" : 16,
			"R" : 17,
			"S" : 18,
			"T" : 19,
			"U" : 20,
			"V" : 21,
			"W" : 22,
			"X" : 23,
			"Y" : 24,
			"Z" : 25
		}

		if(keywordToCOpy.charAt(i).toUpperCase() === Object.keys(codes)[a]) {
			keyNumbered += codes[keywordToCOpy.charAt(i).toUpperCase()] + " "
		}
	}

}
console.log(keywordToCOpy);
console.log(keyNumbered);




















