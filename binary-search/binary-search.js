/**
 * Binary search in a sorted array.
 * @param  {any} data Data to search for
 * @return {Number} Element index (or -1 if not found)
 */
Array.prototype.binarySearch = function(data) {

    if (this.length === 0) {
        return -1;
    }

    var self = this;

    function search(start, end) {

        if (end - start === 0) {
            return self[start] === data ? start : -1;
        }

        var middle = Math.floor((start + end) / 2);

        if (data <= self[middle]) {
            return search(start, middle);
        } else {
            return search(middle + 1, end);
        }
    }

    return search(0, this.length - 1);
};

// Alternate implementation.
function binarySearch(array, data) {
    const search = (start, last) => {
        const middle = Math.floor((start + last) / 2);
        if (start === last) {
            return array[start] === data ? start : -1;
        }
        if (data > array[middle]) {
            return search(middle + 1, last)
        } else {
            return search(start, middle)
        }
    }
    return search(0, array.length -1)
}


function bSearch(array, l, r, data) { // n, 0, 5, 10
    if (r >= l) {
        let mid = l + Math.floor((r - l)/2); // 0+ (5-0)/2 = 2
        if (array[mid] === data) {
            return mid;
        }

        if (data >= array[mid]) {
            return bSearch(array, mid+1, r, data);
        } else if (data < array[mid]) {
            return bSearch(array, l, mid-1, data);
        }

    }

    return -1;
}


function binarySearchIterative(arr, x) {    
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
 
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            r = mid - 1;
            
        // Else the element can only be present
        // in right subarray
        else 
            l = mid + 1;
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}


console.log([1,2,5,8,10,15,35,65].binarySearch(10))
console.log(binarySearch([1,2,5,8,10,15,35,65], 10))

const n = [0,1,2,3,4,5];

console.log('bSearch - ', bSearch(n, 0, n.length-1, 7))