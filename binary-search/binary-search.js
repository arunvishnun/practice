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

console.log([1,2,5,8,10,15,35,65].binarySearch(10))
console.log(binarySearch([1,2,5,8,10,15,35,65], 10))