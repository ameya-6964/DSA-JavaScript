/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
   function findMaxNumber(arr: number[]): number;
 */

function findMaxNumber(arrOfNumbers) {
  let array = [...arrOfNumbers];
  let largest = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

let result = findMaxNumber([1, 2, 3, 44, 44, 44, 5, 6, 7]);
console.log(result);
