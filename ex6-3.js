

function longest(a,b){
    let arr = a+b.split("");
    let obj = {};

    for( const index of arr){
        if((/[^,]/g).test(index)){
            obj[index] = obj[index] ? obj[index]+=1 : obj[index] = 1;
        }
    }
    arr = Object.keys(obj);
    return arr.sort().join('');
}




a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
