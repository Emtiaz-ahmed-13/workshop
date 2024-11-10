//Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello")); //2
