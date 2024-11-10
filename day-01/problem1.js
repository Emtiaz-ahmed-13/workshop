//question -reverseString("hello");  // "olleh"
// const str = "hello";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

function reverserString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverserString("hello"));
