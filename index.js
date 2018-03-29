let encodeOrDecode = process.argv[2];
let message = process.argv[3];
let keyword = process.argv[4];
const letters = 'abcdefghijklmnopqrstuvwxyz'.split("");

function encode() {
  encryptedText = "";
  // loop through message to get index
  for (let i = 0; i < message.length; i++) {
    // take index mod length of keyword to get letter of keyword
    let keywordIndex = i % keyword.length;
    // console.log("keywordIndex: " + keywordIndex);
    // find index in letters for keyword
    let keywordLetterIndex = letters.indexOf(keyword[keywordIndex]);
    // console.log("keywordLetterIndex:" + keywordLetterIndex);
    // find index in letters for message
    let messageLetterIndex = letters.indexOf(message[i]);
    // console.log("messageLetterIndex:" + messageLetterIndex);
    // add index and index in letters
    let combinedIndex = messageLetterIndex + keywordLetterIndex;
    // console.log("combinedIndex:" + combinedIndex);
    // normalize combinedIndex
    let normCombinedIndex = combinedIndex % 26;
    // console.log("normCombinedIndex:" + normCombinedIndex);
    // get letter from letters using index
    let encryptedLetter = letters[normCombinedIndex];
    // console.log("encryptedLetter:" + encryptedLetter);
    // push to new array
    encryptedText += encryptedLetter;
    // console.log("____________");
  }
  console.log(encryptedText);
}

function decode() {
  decryptedText = "";
  // loop through ciphertext to get index
  for (let i = 0; i < message.length; i++) {
    // find letter index of first letter in ciphertext
    let messageLetterIndex = letters.indexOf(message[i]);
    // take index mod length of keyword to get letter of keyword
    let keywordIndex = i % keyword.length;
    // find index in letters for keyword
    let keywordLetterIndex = letters.indexOf(keyword[keywordIndex]);
    // subtract keyword index from ciphertext index 
    let subtractedIndex = messageLetterIndex - keywordLetterIndex;
    // normalize combinedIndex
    if (subtractedIndex < 0) {subtractedIndex += 26;}
    // find letter using index
    let decryptedLetter = letters[subtractedIndex];
    // console.log("keywordIndex: " + keywordIndex);
    decryptedText += decryptedLetter;
  }
  console.log(decryptedText);
}

if (encodeOrDecode == 'encode') {
  encode();
} else {
  decode();
}