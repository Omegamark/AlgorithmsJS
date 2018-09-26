function getMean(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  var solution = total / array.length;
  return solution;
}

function getMedian(array) {
  array.sort((a, b) => a - b);
  if (array.length % 2 === 0) {
    let arrayMiddle = array.length / 2;
    let median = Math.round((array[arrayMiddle] + array[arrayMiddle - 1]) / 2);
    return median;
  } else {
    let arrayMiddle = Math.ceil(array.length / 2);
    return array[arrayMiddle];
  }
}

function getMode(array) {
  // Beginning count at 1 so as to eliminate the situation where tempCount of 1 > 0
  let count = 0;
  console.log("I'm count: ", count);
  let mode = [];
  let temp = 0;
  let tempMode = [];
  for (let i = 0; i < array.length; i++) {
    temp = array[i];
    let tempCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === temp) tempCount++;
    }
    if (tempCount > count) {
      // If the temporary count is bigger than the previous max count.
      count = tempCount;
      // Clear the mode array since the previous numbers are no longer valid.
      mode = [];
      // Push the new mode of the array to the mode array.
      mode.push(temp);
    } else if (tempCount === count) {
      if (!mode.includes(temp)) mode.push(temp);
    }
  }

  return mode;
}

function meanMedianMode(array) {
  console.log(getMean(array));
  console.log(getMedian(array));
  console.log(getMode(array));
}

function meanMedianModeObject(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}
var test1 = [1, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 7, 8, 9];
var test2 = [1, 7, 3, 3, 3, 3, 2, 5, 9, 3, 8, 8, 8, 8, 8, 6];
console.log(meanMedianModeObject(test2));
