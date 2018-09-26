function fibonacci(position) {
  let fibNumOld = 1;
  let fibNumNew = 1;
  let i = 0;
  // Adjust position by 1 for start of fibonacci sequence.
  while (i < position - 1) {
    fibNumNew = fibNumOld + fibNumNew;
    fibNumOld = fibNumNew - fibNumOld;
    i++;
  }
  return fibNumOld;
}

console.log(fibonacci(9));
