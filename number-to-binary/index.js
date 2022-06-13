// Number to binary converter
function numberToBinary(number) {
    return Number(number).toString(5);
    
}

console.log(numberToBinary(15))



function binaryToNumber(binary) {
    return parseInt(binary, 2);
}

console.log(binaryToNumber(1111))