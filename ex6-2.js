
function duplicateCounter(str){
    let obj = {};
    let arr = str.toLowerCase().split('');
    let sumDuplicate = 0;
    for( const index of arr){
        obj[index] = obj[index] ? obj[index]+=1 : obj[index] = 1;
    }
    for( const key in obj){
        obj[key] > 1 ? sumDuplicate++ : sumDuplicate;
    }
    return sumDuplicate;
}

console.log(duplicateCounter("aabbbbBBbcr"));