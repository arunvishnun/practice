/**
 * Given an array and a number as sum, find the pairs that make up to a given sum
 * https://leetcode.com/problems/two-sum/
 */
// O(n) but slightly in efficient as there are two loops
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

//  console.log(twoSum([1,2,3,6,8], 4))

// Method 1 O(n^2)
 const twoSumProblem = (array, sum) => {
    let complement;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        complement = sum - array[i];
        if (array.lastIndexOf(complement) > -1 && array.lastIndexOf(complement) !== i) {
            result.push([array[i], array[array.lastIndexOf(complement)]]);
        }
    }
    return result
 }

//  console.log(twoSumProblem([1,2,3,6,8], 4))

// Method 3 O(n)
const twoSumWithMap = (array, sum) => {
    let map = new Map();
    const result = [];
    array.forEach((item, index) => {
        map.set(item, index);
        let complement = sum - item;
        if (map.has(complement) && map.get(complement) !== index) {
            result.push([complement, item]);
        }
    })
    return result;
}

 console.log(twoSumWithMap([1,2,3,6,8], 4))