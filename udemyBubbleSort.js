function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        console.log("Original Array: ", array);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        console.log("Modified Array: ", array);
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]));
