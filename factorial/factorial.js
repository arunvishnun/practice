function factorial(n) {
    let f = n;
    let i = n-1;
    while (i >=1) {
        f = f* i;
        i--;
    }
    return f;
}

function factorialRecursive(n) { 
    if (n === 0) return 1;
    if (n <= 1) return n;
    return n * factorialRecursive(n-1);
}

function factorialCaching(n) {
    let fn = [];
    let i=1;
    fn[0] = 1;
    while (i <= n) {
        fn[i] = fn[i-1] * i
        i++;
    }
    return fn[n];
}


console.log(factorialCaching(5));