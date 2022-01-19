function mergesort(array = []) {
    const aux = [];
    sort(array, 0, array.length - 1, aux);
}

function sort(array = [], lo, hi, aux = []) {
    if (lo >= hi) return;
    const mid = lo + (hi - lo)/2;
    sort(array, lo, mid, aux);
    sort(array, mid+1, hi, aux);

    merge(array, lo, hi, aux);
}

function merge(array = [], leftStart, rightEnd, aux = []) {
    let leftEnd = (leftStart + rightEnd)/2;
    let rightStart = leftStart + 1;

    let i = leftStart;
    let j = rightStart;
    let k = leftStart;

    while (i <= leftEnd && j <= rightEnd) {
        if (array[i] <= array[j]) {
            aux[k] = array[i]
            i++;
        } else {
            aux[k] = array[j]
        }
        k++;
    }

    while (i <= leftEnd ) {
        aux[k] = array[i]
        i++;
        k++;
    }

    while (j <= rightEnd ) {
        aux[k] = array[j]
        j++;
        k++;
    }
}

console.log(mergesort([9,7,5,3,4,6,8,10]));