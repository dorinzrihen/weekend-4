


function toCamelCase(str){
    let strArr =  str.split(/[- _]/) ;
    for(const word of strArr){
        let changeWord = word.replace(word[0],word[0].toUpperCase());
        strArr[strArr.indexOf(word)] = changeWord;
        
    }
    return strArr.join('')
}

console.log(toCamelCase("the-stealth-warrior"));  // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"
