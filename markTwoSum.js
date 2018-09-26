function twoSum(numArray, sum) {
  let numObj = {};
  let pairArray = [];
  // Create an object with the number of instances of each number.
  numArray.forEach(num => {
    if (!numObj[num] && num <= sum) numObj[num] = 0;
    numObj[num]++;
  });
  numArray.forEach(num => {
    if (num > sum) console.log("Number is larger than the sum.");
    let pair = [];
    diff = sum - num;
    if (numObj[num] > 0 && numObj[diff] > 0) {
        pair = [num, diff];
        pairArray.push(pair);
        numObj[num]--;
        numObj[diff]--;
        // Must check if numObj[diff] === 0 since if the value is 0 or less, it is not possible to check for existence using just numObj[diff].
    } else if(numObj[num] > 0 && numObj[diff] === 0) {
      numObj[num]--;
      pair = [num, diff];
      pairArray.push(pair)
    }
  });
  return pairArray;
}

var test1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 0];
console.log(twoSum(test1, 7));
console.log(twoSum([1,6,6,6,4,3,5,3,3], 7))
