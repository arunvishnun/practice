/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Could you do it in-place with O(1) extra space?
 * */

// This wont be the intention of this question. But just for reference. O(n^2)
const rotateSimple = function (nums, k) {
    let tmp;
    const len = nums.length;
    k %= len;

    for (let i = 0; i < k; i++) {
        tmp = nums.pop();
        nums.unshift(tmp);
    }
};


// On each rotation, we replace the item in current index with item from previous index. Shifts through the array. O(n^2). In Place
const rotate = (array, k) => {
    const length = array.length;
    let rCount = k % length;
    for (let i = 0; i < rCount; i++) {
        let previousItem = array[length - 1];
        // Loops through the array.
        for (let j = 0; j < length; j++) {
            // Keeps current item in a temporary variable
            let temp = array[j]
            // Set previous item to current index
            array[j] = previousItem;
            // update the previous item as item that was already in this index. So  next iteration will consider item that was in this index as previous item.
            previousItem = temp;
        }

    }
    return array;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3));

const rotateExtraSpace = (array, k) => {
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        newArray[(i + k) % array.length] = array[i]
    }
    return newArray
}

console.log(rotateExtraSpace([1, 2, 3, 4, 5, 6, 7, 8], 3));