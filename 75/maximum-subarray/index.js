// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

/* 
0. set a MaxSum arr[0]
1. Iterate i from 0 to length
2. iterate from j from i+1 to length
3. if sum so far goes below maxSum. Stop and reset i to j and continue
*/

function maxSubArray(array) {
    
    if(array.length === 0) {
        return -1
    }

    let maxSum = array[0];
    let i = 0;
    while( i < array.length) {
        let subSum = 0
        for (let j = i+1; j < array.length; j++) {
            subSum = subSum + array[j];
            if (subSum > maxSum) {
                maxSum = subSum
            } else if (subSum < maxSum) {
                i = j +1
                break;
            }
        }
    }
    return maxSum;
}
