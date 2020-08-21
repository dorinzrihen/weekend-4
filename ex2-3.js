//Perfect Square


function findNextSquare(number){
    return Math.sqrt(number) % 1 === 0 ? Math.pow(Math.sqrt(number)+1,2) : -1;

}

console.log(findNextSquare(114)); 