// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] 
 * might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array nums after the possible rotation 
 * and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) 
 * runtime complexity.
 */

// O(n) solution
// function search(array, target) {
//     if (array.length === 0 || target === null) {
//         return -1
//     }
    
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i;
//         }
//     }

//     return -1;
// }


// O(log(n)) - applying a modified binary search here.
// Finds a pivot element which is the start of rotated half. This will be the lowest element in the list
// To find the pivot -
//  - Half the array. 
//  - if middle is grater than right most - something is off meaning this half has the pivot.Change the left most elemnt to be the one next to mid
//  - otherwise left half has the pivot, change the rightmost element to be mid
//  - repeat the proocess until lft meets right.

// Now we have the pivot. 
// The target element will be either on the left of pivot or on the right of pivot including the pivot
// This helps to make pivot either as right most or leftmost of the new sub array to consider
// Do binary search in this portion of array.
function search(array, target) {
    if (array.length === 0 || target === null) {
        return -1
    }
    let l = 0; 
    let r = array.length - 1;

    while(l < r) {
        let mid = l + (r -l)/2;
        if (array[mid] >= array[r]) {
            l = mid + 1
        } else {
            r = mid;
        }
    }
    console.log(`pivot ${l}`);
    //  at this point array[l] will be the pivot
    let pivot = l;
    l = 0;
    r = array.length -1;
    
    // take the right half
    if (array[pivot] <= target && target <= array[r]) {
        l = pivot;
    } else {
        r = pivot;
    }

    while(l <= r) {
        let middle = l + (r -l)/2;

        if (array[middle] === target) return middle;
        else if (array[middle] < target) {
            l = middle + 1;
        } else {
            r = middle - 1;
        }
    }
    return -1;
}


console.log(search([4,5,6,7,0,1,2], 2))