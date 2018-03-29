let getIdx = (words) => {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let wordsArray = words.toLowerCase().split('');
	let allIdx = [];
	for(let i = 0; i<wordsArray.length; i++){
		//console.log(wordsArray[i]);
		//get the alphabet idx as a reference
		for (let k =0; k<alphabet.length; k++){
			if(alphabet.charAt(k) == wordsArray[i]){;
				allIdx.push(k);
			}
		}
	}
	return allIdx;
}

let getKey = (keyword,message) => {
	let keywordArray = keyword.split('');
	let key = "";
	while(true){
		for(k=0; k<keywordArray.length; k++){
			if(key.length === message.length){
				return key;
			}
			else{
				key += keywordArray[k];
			}
		}
	}
}

let sumStr = (msgIdx,keyIdx) => {
	let sumIdx = [];
	for(let i=0; i<msgIdx.length; i++){
		let currIdx = msgIdx[i] + keyIdx[i];
		if(currIdx > 26){
			currIdx = currIdx - 26;
		}
		sumIdx.push(currIdx);
	}
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let output = "";
	for(let i=0; i<sumIdx.length; i++){
		for (let k =0; k<alphabet.length; k++){
			if(k == sumIdx[i]){
				output += alphabet.charAt(k);
			}
		}
	}
	return output;
}

let encrypt = (keyword,message) => { 
	let msgIdx = getIdx(message);
	let key = getKey(keyword,message);
	console.log("key: " + key);
	let keyIdx = getIdx(key);
	let encryptedStr = sumStr(msgIdx,keyIdx);
	return encryptedStr;
}

if(process.argv[2] == "vigEncrypt"){
	console.log("keyword: " + process.argv[3]);
	console.log("message: " + process.argv[4]);
	let output = encrypt(process.argv[3],process.argv[4]);
	console.log("encrypted message: " + output);
}