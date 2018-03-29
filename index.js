//match each msgArray index to its corresponding keyArray index
//add each pair together
//form a letter with the sum of the pair index


function encrypt(message, keyword) {
  let msgArray = message.split("");
  let keywordArray = keyword.split("");
  let result = [];

  for (var i = 0; i < msgArray.length; i++) {
    let k = i % keyword.length; 
    let addLetterValue =
      msgArray[i].charCodeAt(0) - 97 + keywordArray[k].charCodeAt(0) - 97;
    if (addLetterValue > 25) {
        addLetterValue = addLetterValue - 26;
    }
    let getCharFromValue = String.fromCharCode(addLetterValue + 97);

    result.push(getCharFromValue);
  }
  return result.join('');
}

console.log(encrypt("attackatdawn", "lemon"));
