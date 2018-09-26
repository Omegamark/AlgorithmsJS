function binarySearch(numArray, key) {
  // Sort the numArray
  numArray.sort(((a, b) => a - b));
 
  let middleIndex = Math.floor(numArray.length / 2);
  let middleElement = numArray[middleIndex];
  // Check if the middle element is a key.
  if (key === middleElement) return true;
  // If the key is larger than the middle element, eliminate the left half of the array.
  if (key > middleElement && numArray.length > 1) {
      return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  }
  // If the key is smaller than the middle element, eliminate the right half of the array.
  if (key < middleElement && numArray.length > 1) {
      return binarySearch(numArray.splice(0, middleIndex), key)
  } 
  // In the case that all of these fail, the key is not in the array.
  return false
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56))