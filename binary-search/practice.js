// Idea of binary search is sort the array and divide the 
// search based on value is grater that mid or less.


function binarySearch(array, value) {
    if (array.length === 0 ) {
        return -1
    }

    const search = (first, mid, last) => {
        if (last === first) {
            return value === array[last]
        }
        if(array[mid] === value) {
            return mid
        }
        if (value > array[mid]) {
            search(mid, mid + (last - mid)/2, last)
        } 

        if (value < array[mid]) {
            search(first, first + (mid - first)/2, mid)
        }
    }

    return array[search(0, Math.floor(array.length/2), array.length - 1)]
}


console.log(binarySearch([1,2,5,8,10,15,35,65], 10))