

function shortestWord(str){
    let arrShort = str.split(' ');
    let arrShortLen = []

    for (const word of arrShort){
        arrShortLen.push(word.length);
    }
    return Math.min(...arrShortLen);
}

console.log(shortestWord("oh my g good f jggb"));