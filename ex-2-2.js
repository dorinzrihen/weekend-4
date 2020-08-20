

let binary = [0,1,0,0];
let binary2 = [1,0,1,0,1,0,0];


function makeNumber(binary){
    let binaryReverse = binary.reverse();
    let binarySum = 0;
    for(i = 1; i< binaryReverse.length-1;i++){
        if(i === 2){
            binarySum += (binaryReverse[i] *2);
        }
        else{
            binarySum += (binaryReverse[i] * Math.pow(2, i));
        }
    }
    return binarySum
}

console.log(makeNumber(binary2));