function positiveSum(arr) {
    let theSum=0;
    //for(let i =0; i<arr.length;i++){
    for (let i of arr){
        if(i >= 0){
            theSum = theSum + i;
        }
    }
    return theSum;
}

console.log(positiveSum([1,-4,7,12]));

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.