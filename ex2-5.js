

function summation(number){
    let sumNumbers = 0;
    for (i=1;i<number+1;i++){
        sumNumbers += i;
    }
    return sumNumbers;
}


console.log(summation(8));