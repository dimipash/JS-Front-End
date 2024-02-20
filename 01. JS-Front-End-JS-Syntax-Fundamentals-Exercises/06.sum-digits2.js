function sumDigits(number) {
  let sum = 0;

  while (number > 0) {
    let lastDigit = number % 10;
    sum += lastDigit;
    number = Math.trunc(number / 10);
}
 console.log(sum);
}


sumDigits(1234);