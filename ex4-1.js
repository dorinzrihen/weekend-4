//Ex4.1 - Fibonacci - 


const fibonacci =(n) => {
    let previusNum1 = 1;
    let previusNum2 = 1;
    for(i = 2; i< n;i++){
        previusNum1 >= previusNum2 ? previusNum2 += previusNum1 : previusNum1 += previusNum2;
    }
    return previusNum1 > previusNum2 ? previusNum1 : previusNum2;
}

console.log(fibonacci(14));