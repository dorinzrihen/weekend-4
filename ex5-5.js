


function abbreviate(fullName){
    arrFullName = fullName.split(' ');
    return `${arrFullName[0][0].toUpperCase()}.${arrFullName[1][0].toUpperCase()}`
}

console.log(abbreviate("Sam Harris"));
console.log(abbreviate("Patrick Feeney"));
console.log(abbreviate("patrick feeney"));