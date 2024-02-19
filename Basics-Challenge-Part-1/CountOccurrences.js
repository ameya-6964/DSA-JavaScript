/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
  function countOccurrences(str: string, char: string): number;
 */

function countOccurrences(string, char) {
  let number = 0;
  let arr = string.split("");
  const stringLength = arr.length;
  for (let i = 0; i < stringLength; i++) {
    if (arr[i] === char) {
      number++;
    }
  }
  return number;
}

let result = countOccurrences("Ameya", "z"); // 0
console.log(result);
