function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  magazineArr.forEach(word => {
    // Loop = O(n)
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  // Loop = O(m)
  noteArr.forEach(word => {
    if (magazineObj[word]) magazineObj[word]--;
    // the line below is possible for this solution since 0 in JS is falsey.
    // else noteIsPossible = false;
    // However, this is the more correct solution.
    if (magazineObj[word] < 0) noteIsPossible = false;
    // If the word is not present, both of the previous if blocks would be skipped. 
    // Since noteIsPossible is initialized as "true", we need to set it to false if the word is not present in the first place.
    else noteIsPossible = false;
  });
  return noteIsPossible;
}

console.log(harmlessRansomNote("this is magazine magazine all text", "this is all the magazine text in the magazine"));
// Zero is "falsey" in JS.
console.log(0 == false)

// *** This function has linear time complexity of O(n + m) which can be simplified to O(n) since the loops are not nested.
// the function grows in linear time. Also = O(n) + O(m)