
function duplicateCaouner(str){
    let obj = {};
    let arr = str.split('');
    let sumDuplicate = 0;
    for( const index of arr){
        obj[index] = obj[index] ? obj[index]+=1 : obj[index] = 1;
    }
    for( const [key, value] of Object.entries(obj)){
        value > 1 ? sumDuplicate++ : sumDuplicate;
    }
    return sumDuplicate;
}

console.log(duplicateCaouner("ssdfvFFSDsfcnnrj"));