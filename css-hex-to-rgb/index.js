function hexToRGB (hex) {
    let decimal = []
    const hexDigits = hex.split('');
    for (let i=1; i < hexDigits.length; i=i+2) {
        decimal.push(parseInt(hex[i] + hex[i+1], 16))
    }
    return `rgb(${decimal.join(',')})`
}

console.log(hexToRGB('#FFFFFF'));