function reverseString(string) {
  let word = string.split("");
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }
  return reversed;
}

let result = reverseString("Ameya");
console.log(result);
