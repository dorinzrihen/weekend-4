//Ex4.2 - Tribonacci -



const tribonacci =(n) => {
    let previousNum = [1,1,1];
    for(i = 3; i< n;i++){
        let lowestNum = Math.min(...previousNum);
        previousNum[previousNum.indexOf(lowestNum)] = previousNum.reduce(function(pre1,pre2){
            return pre1+pre2;
        });
    }
    return Math.max(...previousNum);
    
}
console.log(tribonacci(8));