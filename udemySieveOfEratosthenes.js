function sieveOfEratosthenes(num) {
  let primes = [];
  let maxPrime = Math.sqrt(num);
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
    if (i < 2) primes[i] = false;
  }

  for (i = 2; i <= maxPrime; i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  let primesArray = [];
  for (let i = 0; i < primes.length; i++) {
      if (primes[i] === true) primesArray.push(i)
  }
  return primesArray;
}

console.log(sieveOfEratosthenes(20));