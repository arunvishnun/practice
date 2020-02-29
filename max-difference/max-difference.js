/**
 * Returns maximum difference between two elements;
 * the first element must appear before the second.
 * 
 * Example:
 * [1,5,3,4,2,-7,0,3] => 10 (-7 and 3)
 * [10,3,7,5,1,9,-1,12,24,0,23] => 14 (1 and 15)
 * 
 * @param  {Array} arr Array of numbers
 * @return {Number}
 */

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

 console.log(getMaxDiff([1,5,3,4,2,7,0,3]));