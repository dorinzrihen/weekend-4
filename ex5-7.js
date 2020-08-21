

function shortestWord(str){
    arrShort = str.split(' ');
    arrShortLen = []

    for (const word of arrShort){
        arrShortLen.push(word.length);
    }
    return Math.min(...arrShortLen);
}

console.log(shortestWord("oh my g good f jggb"));