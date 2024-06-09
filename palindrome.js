// 2. Create a file named “palindrome.js” and inside the file, create a
// function named “palindrome”. The function should accept a word and check
// if that word is a palindrome.
// Example, level is a palindrome, energy is not a palindrome.

function palindrome(word) {
  const isPalindrome = word; 
  const splitString = isPalindrome.split("").reverse().join("") ;
  if (word === splitString) {
    return "it is a palindrome";
  } else {
    return "It is not a palindrome";
  }
 
}
console.log(palindrome('nin'));
