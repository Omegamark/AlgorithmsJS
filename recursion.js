// Basic recursive concept
// function func() {
//     if (/* base case*/) {
//         return something;
//     } else { // recursive case
//         func()
//     }
// }

function factorial(num) {
    // num would be better as num <= 1
  if (num === 1) {
    return num;
  } else {
       return num * factorial(num - 1)
  }
}

console.log(factorial(4));
