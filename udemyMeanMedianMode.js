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
  var modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  var maxFrequency = 0;
  var modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  if (modes.length === Object.keys(modeObj).length)
    return "This array has no mode!";
  return modes;
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
var test3 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
console.log(meanMedianModeObject(test3));
