var toEncrypt = process.argv[2];
var encryption = process.argv[3];

var res = "";
for (var i=0; i<toEncrypt.length;i++) {
  
  var keyWordIdx = i % encryption.length;
  var keychar = encryption.charCodeAt(keyWordIdx);
  var shift = toEncrypt.charCodeAt(i) - 97;

  var newCharCode;
  if (keychar + shift <= 122) newCharCode = (keychar + shift);
  else {
    newCharCode = (keychar + shift) % 122 + 96;
  }
  res += String.fromCharCode( newCharCode );
}

console.log(res);

// a: 97
// z: 122
