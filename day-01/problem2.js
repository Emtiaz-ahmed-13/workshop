//Write a function that checks if a string is a palindrome.

function isPalindrom(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
console.log(isPalindrom("madam"));
