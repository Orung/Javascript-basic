// 3. Create a file named “linearSearch.js” and inside the file,
// create a function named “linearSearch”. The function should search for a string
// in an array of strings and return “Yes, the string exists in the array” if the string is found and “No,
// the string does not exist in the array”. Note: Don't use include or indexOf methods for this exercise.

function linearSearch(string) {
  const stringArray = [
    "apple",
    "orange",
    "pen",
    "created",
    "updated",
    "deleted",
    "member",
  ];

  const getString = stringArray.find((value) => value === string);
  if (getString) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(linearSearch("peni"));
