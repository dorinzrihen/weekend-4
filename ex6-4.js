

function isogram(str){
    let strLowercase = str.toLowerCase();
    let arr = strLowercase.split('');
    let obj = {};

    for( const index of arr){
        obj[index] = obj[index] ? obj[index]+=1 : obj[index] = 1;
    }
    arr = Object.values(obj);
    return Math.max(...arr) <= 1 ? true : false;
}




a = "moOse";
console.log(isogram(a));