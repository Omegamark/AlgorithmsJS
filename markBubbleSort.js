function bubbleSort(array) {
  // Make a counter to decrement array length in the loop
  let arrayDecrementor = array.length;
  // Make a variable to temporarily store the value to be swapped
  let temp = 0;
  for (let i = 0; i < arrayDecrementor; i++) {
    // Inner for loop needs to run the above amount of times
    for (let j = 0; j < arrayDecrementor; j++) {
      // Check if the next element in the array is bigger
      if (array[j] > array[j + 1]) {
        console.log("Original Array: ", array);
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        console.log("Modified Array: ", array);
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]));
