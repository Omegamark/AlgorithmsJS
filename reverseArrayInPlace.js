var test = [1, 2, 3, 4, 5, 6, 7, 8];
var test2 = ["cats", "dogs", "bonobos", "lizards", "kangaroos"]

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp;
    // Store the first item in the array in a temporary variable.
    temp = array[i];
    // Move the last item in the array to the current index in the iteration's forward progression.
    // let arrayEnd = array[array.length - 1 - i]; // This step is unneccessary and confusing.
    array[i] = array[array.length - 1 - i]; // This is much clearer, avoids problems with variable reference.
    // Replace the last item in the array with the stored variable.
    array[array.length - 1 - i] = temp;
 }
  // Return the array.
  return array;
}

console.log("Test Array:     ", test)
console.log("Reversed Array: ", reverseArrayInPlace(test));
