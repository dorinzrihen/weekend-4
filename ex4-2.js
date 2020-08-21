//Ex4.2 - Tribonacci -



const tribonacci =(n) => {
    let previusNum = [1,1,1];
    for(i = 3; i< n;i++){
        let lowetNum = Math.min(...previusNum);
        previusNum[previusNum.indexOf(lowetNum)] = previusNum.reduce(function(pre1,pre2){
            return pre1+pre2;
        })
    }
    return Math.max(...previusNum);
    
}
console.log(tribonacci(8));