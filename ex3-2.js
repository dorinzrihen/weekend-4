//Ex3.2 - People on the Bus


function peopleOnBus(arr){
    let nowOnBus = 0
    for(const miniArr of arr){
        if(nowOnBus + miniArr[0] < miniArr[1]){
            return "Something wrong with the data"
        }
        nowOnBus += miniArr[0] - miniArr[1];
    }
    return nowOnBus;
}


console.log(peopleOnBus([[3,0],[5,5],[7,2],[10,7]]));
console.log(peopleOnBus([[3,0],[5,15],[7,2],[10,7]]));