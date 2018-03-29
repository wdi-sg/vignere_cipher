function vigCipherApply(toEncode, protokey, reverse = false) {
    let workingArray = toEncode.toLowerCase().split('');
    let key = protokey.toLowerCase();
    let shift = 0;
    let result = workingArray.map((char) => {
        shift = (key.charCodeAt(0)-97) * (reverse ? -1 : 1);
        key = key.slice(1) + key.charAt(0);
        code = char.charCodeAt(0)+shift;
        if (reverse) {
            code = (code < 97 ? code + 26 : code);
        } else {
            code = (code > 122 ? code - 26 : code);
        }
        return String.fromCharCode(code);
    });
    return result.join('');
}

console.log(vigCipherApply('attackatdawn'));