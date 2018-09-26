function reverseWords(string) {
    // reverse every word in the string
    // Split the string on spaces
    let wordArray = string.split(" ");
    // Reverse the each word and push to an array
    let reversedWordArray = [];
    wordArray.forEach(word => {
        reversedWordArray.push(word.split("").reverse().join(""))
    });
    // Join the array back into a string with the reversed words.
    let reversedWordString = reversedWordArray.join(" ");
    return reversedWordString;
    // return the new string
}

console.log(reverseWords("Hello my name is Mark!"))
console.log(reverseWords("Coding Javascript"))