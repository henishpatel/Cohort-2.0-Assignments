/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	// Your code here
	let count = 0;
	let tempStr = str.toLowerCase();
	for (let i = 0; i < tempStr.length; i++) {
		if (
			tempStr[i] === "a" ||
			tempStr[i] === "e" ||
			tempStr[i] === "i" ||
			tempStr[i] === "o" ||
			tempStr[i] === "u"
    ) {
      count = count + 1;
		}
  }
  return count;
}

module.exports = countVowels;
