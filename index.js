var generateKey = (message,keyword)=>{
  let key = []
  message = message.split("")
  keyword = keyword.split("")
  for(let i =0; key.length < message.length; i++){
    key.push(keyword[i]);
    if(i == keyword.length -1){
      i=-1
    }

  }
  key = key.join("")
  return key;
}

var generateCipher = (message, keyword,type ) => {
  let cypher = ""
  message = message.split("")
  keyword = keyword.split("")
  for (let i = 0; i < message.length; i++ ) {
    messageNum = parseInt(message[i], 36) -10
    keywordNum = parseInt(keyword[i], 36) -10

    if(type == 'decode'){
      keywordNum = keywordNum * -1  
    }

    cypher += String.fromCharCode(( messageNum + keywordNum  > 26 ? messageNum + keywordNum +71 : messageNum + keywordNum  < 0 ? messageNum + keywordNum +123 : messageNum + keywordNum +97 ) )

  }
  return cypher;
}


if(!process.argv[2] || !process.argv[3] || !process.argv[4]){
  console.log ("Use the format node index.js encode/decode message keyword ")
}
else{
  console.log(generateCipher(process.argv[3], generateKey(process.argv[3],process.argv[4]),process.argv[2] ))
}

