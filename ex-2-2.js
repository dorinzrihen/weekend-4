

let binary = [0,0,0,1];
let binary2 = [1,0,1,0,1,0,0];


function makeNumber(binary){
    let binaryReverse = binary.reverse();
    let binarySum = 0;
    for(i = 0; i< binaryReverse.length;i++){
        binarySum += Math.pow(2,i)*binaryReverse[i];
    }
    return binarySum;
}

console.log(makeNumber(binary));