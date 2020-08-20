

arrNumber = [1,3,4,5,6,3,4,5,5,67,4,335,6];

function lowestSum(arr){
    arr.sort(function(a, b) {
        return a - b;
      });
    return arr[0]+arr[1];
}

console.log(lowestSum(arrNumber));

