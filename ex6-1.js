

function mumbling(str){
    let arrStr = str.split("");
    let arrStrMumbling = [];
    for (i = 0 ; i<arrStr.length; i++){
        arrStrMumbling.push(`${arrStr[i].toUpperCase()}${arrStr[i].toLowerCase().repeat(i)}`);
    }
    return arrStrMumbling.join('-');
}

console.log(mumbling("hiWoH"))