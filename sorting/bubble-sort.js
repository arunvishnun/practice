

function bubbleSort(array) {
    let k = 0;

    while (k< array.length-1) {
        for (let i = 0; i< array.length-1; i++ ) {

            if(array[i] > array[i+1]) {
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
        k++;
    }
    return array;
}

function bubbleSortImprovement1(array) {
    let k = 0;

    while (k< array.length-1) {
        for (let i = 0; i< array.length-k-1; i++ ) {

            if(array[i] > array[i+1]) {
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
        k++;
    }
    return array;
}




function bubbleSortImprovement2(array) {
    let k = 0;

    while (k< array.length-1) {
        swapped = false;
        for (let i = 0; i< array.length-k-1; i++ ) {
            
            if(array[i] > array[i+1]) {
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false) {
            break;
        }
            
        k++;
    }
    return array;
}

console.log(bubbleSortImprovement2([9,8,7,6,5,4,3]));
console.log(bubbleSortImprovement2([0,9,1]));
