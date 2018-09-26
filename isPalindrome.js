function isPalindrome(string) {
    string = string.toLowerCase();
    var charArray = string.split("");
    var validChars = "abcdefghijklmnopqrstuvwxyz".split("");

    var lettersArr = [];
    charArray.forEach(char => {
        if (validChars.indexOf(char) > -1) lettersArr.push(char);
    });

    if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
    else return false;
}

console.log(isPalindrome("Madam I'm Adam"))
console.log(isPalindrome("Race car"))
console.log(isPalindrome("JS Alogorithms"))
