function processData(input) {
  let num = parseInt(input, 10);
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input.trim());
});
