/**
 * Write a function that takes an integer as input and returns the number of digits in that integer.
 */

function countDigits(num) {
  let count = 1;
  num = Math.abs(num);
  
  while ( (num / 10) >= 1 ) {
     num = num / 10;
     count++;
  }

  return count;
}



function countDigitsTwo(num) {
    if (! Number(num)) {
        return null;
    }

    return ('' + num).length;
}

console.log(countDigits(1000));

console.log(countDigitsTwo(1000));