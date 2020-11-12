/**
 * Maximum difference between two elements such that larger element appears after the smaller number
 * 
 * Example:
 * [1,5,3,4,2,-7,0,3] => 10 (-7 and 3)
 * [10,3,7,5,1,9,-1,12,24,0,23] => 14 (-1 and 24)
 * 
 * @param  {Array} arr Array of numbers
 * @return {Number}
 */

//  Finding difference between min and max. Does not consider if larger element comes after smaller one
 const getMaxDiff = (arr) => {
    
    if (!Array.isArray(arr) || !arr.length) return "Not a valid input !!!";
    let min = arr[0];
    let max = arr[0];
    arr.forEach( (element,index) => {
        max = Math.max(element, max);
        min = Math.min(element, min);
    });

    return [max, min];
 }

//  console.log(getMaxDiff([10,5,3,4,2,7,0,3]));

//  Bruteforce - O(n^2) due to loop inside loop
function findMaxDiff(array) {
    console.time('test1');
    let maxDiff = 0;
    let minIndex = 0;
    let maxIndex = 0;
    for (let i=0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            let diff = array[j] - array[i];
             if ( diff > maxDiff) {
                maxDiff = diff;
                minIndex = i;
                maxIndex = j;
             }
        }
    }
    console.timeEnd('test1');
    return { minValue: array[minIndex], maxValue: array[maxIndex], maxDiff };
}

// console.log("Method 1", findMaxDiff([10,5,3,4,2,-7,0,3]))

// Method 2 - O(nlog(n)) because of sort
function findMaxImproved(array) {
    console.time('test2');
    const newArray = [...array];
    const length = newArray.length;
    newArray.sort((a, b) => a - b );
    console.timeEnd('test2');
    return newArray[length - 1] - newArray[0];
}

// console.log("Method 2", findMaxImproved([10,5,3,4,2,-7,0,3]))

// Assume an initial minimum value and max difference. 
function findMaxEfficient(array) {
    if (array.length < 2) { 
        return array[0] ? array[0] : "Array should have at least 2 elements to find max diff"
    }
    let minElement = array[0];
    let maxDifference = 0;
    for (let i = 1; i < array.length; i++) {
        if ((array[i] - minElement) > maxDifference) {
            maxDifference = (array[i] - minElement) 
        }
        if (array[i] < minElement) {
            minElement = array[i];
        }
    }
    return maxDifference;
}

console.log("Method 3", findMaxEfficient([10,-1,5,3,4,2,7,0,3]))
console.log("Method 3", findMaxEfficient([]))