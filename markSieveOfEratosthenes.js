function sieveOfEratosthenes(num) {
    // return all prime numbers up to num in an array
    let boolArray = [];
    let solutionArray = [];
    let primeNumber = 0;
    // Create array of true booleans
    for (let i = 0; i <= num; i++) {
        if (i < 1) boolArray.push(false)
        boolArray.push(true)
    }
    for (let i = 2; i <= boolArray.length; i++) {
        if (i % 2 === 0 || i % 3 === 0) boolArray[i] = false;
        if (i === 2 || i === 3) boolArray[i] = true;
        if (boolArray[i] === true) {
            primeNumber = i
            solutionArray.push(primeNumber)
        }
    }
    console.log(boolArray)
    return solutionArray;
}

console.log(sieveOfEratosthenes(20))

console.log(2 % 2)