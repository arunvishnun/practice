/**
 * Given an array and a number as sum, find the pairs that make up to a given sum
 */

 const twoSum = (arr, target) => {
    let map = new Map();
    let result = [];
    arr.forEach( (element, index) => {
        map.set(element, index);
    });

    arr.forEach( (element, index) => {
        
        let complement = target - element;
        if(map.has(complement) && map.get(complement) != index) {
            result.push([element, arr[map.get(complement)]]);
        }
    })
    return result;
 }

 console.log(twoSum([1,2,3,6,8], 4))