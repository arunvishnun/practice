function hexToRGB (hex) {
    let decimal = [];
    const hexDigits = hex.split('');
    for (let i=1; i < hexDigits.length; i=i+2) {
        let hexValue = hex[i] + hex[i+1];
        decimal.push(parseInt(hexValue, 16))
    }
    return `rgb(${decimal.join(',')})`
}

console.log(hexToRGB('#FFFFFF'));