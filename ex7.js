const array1 = ['a', 'b', 'c'];
const array2 = [1,4,5,6,3,55,7,4,5,3];

// ForEach

function myForEach(x){
    for (const i in x){
        x[i] += " code to do";
    }
}

myForEach(array1);
console.log(array1);

// Filter 

function myFilter(arr){
    let filterArr = [];
    for(const digit of arr){
        digit >= 5? filterArr.push(digit) : "";
    }
    return filterArr;
}

const a = myFilter(array2);
console.log(a);

// map

function myMap(x){
    let mapArr = []
    for (const i of x){
        mapArr.push(i + " code to do");
    }
    return mapArr;
}


const map = myMap(array1);
console.log(map);