function quickSort(array, l, h) {
    if (l<h) {
        let pi = partition(array, l, h);
        quickSort(array, l, pi);
        quickSort(array, pi + 1, h);
    }

    return array;
}

function partition(array, l, h) {
    let pivot = array[l];

    let i = l;
    let j = h;
    while(i <= j) {
        do {
            i++;
        } while(array[i] <= pivot && i < array.length)

        
        do {
            j--;
        } while(array[j] > pivot && j >= 0)

        if (i < j) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }

    let temp = array[l];
    array[l] = array[j];
    array[j] = temp;
    // console.log(array);
    return j;
}

const arr = [10, 16, 8, 12, 15, 6, 3, 9, 5];
// expected -  [3, 5, 6, 8, 9, 10, 12, 15, 16];
const result = quickSort(arr, 0, arr.length);
console.log(result)
