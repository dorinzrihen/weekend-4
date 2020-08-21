//Unique

const findUniq = (arr) => {
    let suspicionNum = arr[0];
    for (const index in arr){
        if (arr[index] !== suspicionNum){
            return index > 1 
            ? arr[index] 
            : arr[arr.length-1] === suspicionNum 
            ? arr[index] 
            : suspicionNum;
        }
    }
}

console.log(findUniq([0, 0, 0, 0, 0.55 ]));