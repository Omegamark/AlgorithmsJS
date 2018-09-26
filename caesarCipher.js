// *** Original solution
// function caesarCipher(str, num) {
//     // Using the modulus operator keeps the algoritm from looping through the alphabet multiple times.
//     // The remainder returned from modulus will end at the same index as it would were it to loop through multiple times.
//     num = num % 26;
//     var lowerCaseString = str.toLowerCase();
//     var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//     var newString = "";
//     for (var i = 0; i < lowerCaseString.length; i++) {
//         var currentLetter = lowerCaseString[i];
//         if (currentLetter === " ") {
//             newString += currentLetter;
//             continue;
//         }
//         var currentIndex = alphabet.indexOf(currentLetter);
//         var newIndex = currentIndex + num;
//         if (newIndex > 25) newIndex = newIndex - 26;
//         if (newIndex < 0) newIndex = 26 + newIndex;
//         if (str[i] === str[i].toUpperCase()) {
//             newString += alphabet[newIndex].toUpperCase();
//         }
//         else newString += alphabet[newIndex]; 
//     }
//     return newString;
// }

// *** Using shorthand operators
function caesarCipher(str, num) {
    // Using the modulus operator keeps the algoritm from looping through the alphabet multiple times.
    // The remainder returned from modulus will end at the same index as it would were it to loop through multiple times.
    num %= 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var newString = "";
    for (var i = 0; i < lowerCaseString.length; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === " ") {
            newString += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex -= 26;
        if (newIndex < 0) newIndex += 26;
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }
        else newString += alphabet[newIndex]; 
    }
    return newString;
}

console.log(caesarCipher("Zoo Keeper", 2)) // Bqq Mggrgt
console.log(caesarCipher("Big Car", -16)) // Lsq Mkb
console.log(caesarCipher("Javascript", -900)) // Tkfkcmbszd