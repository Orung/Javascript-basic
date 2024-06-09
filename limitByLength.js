// 4. Create a file named “limitByLength.js” and inside the file create a function named “limitByLength”
// that accepts a string, checks if the characters in the string is greater than 100. If the characters in
// the string is not greater then 100, return the string, but if the characters in the string is greater than 100,
// return the first 100 characters in the string with three dots at the end. Example:

 
function limitByLength(string) {
  const checkHundred = string.slice(0, 100); 
  if (string.length <= 100) {
    return checkHundred;
  } else {
    return `${checkHundred}...`;
  }
}

console.log(
  limitByLength(
    "ut sem nulla pharetra Lorem ipsum  diam sit amet nisl suscipit adipiscing vcr hf bibendum fdfg est ultrici "
  )
);
