

function toWeirdCase (str){
    arr = str.split("");
    for (i = 0 ; i<arr.length ; i+=2){
        arr[i] = arr[i].toUpperCase();
    }
    return arr.join('');
}


console.log(toWeirdCase("String"));
console.log(toWeirdCase( "Weird string case" ));