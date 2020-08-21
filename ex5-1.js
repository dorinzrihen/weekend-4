
const trimmingString = (str) => {
    let strArr = str.split('');
    strArr.pop();
    strArr.shift();
    return strArr.join('');
}

console.log(trimmingString("HEllo"));