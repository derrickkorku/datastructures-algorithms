/**
 * Write an algorithm to determine if a number nn is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 11 (where it will stay), or it loops endlessly in a cycle which does not include 11.
    Those numbers for which this process ends in 11 are happy.

Return TRUE if nn is a happy number, and FALSE if not.
 */

function isHappyNumber(num) {
    let fast = num;
    let slow = num;

    while(true) {
        slow = sumOfDigits(slow);
        fast = sumOfDigits(fast);
        fast = sumOfDigits(fast);

        if (slow === fast) {
            if (slow === 1) {
                return true;
            } else {
                return false;
            }
        }
    }
}


function sumOfDigits(num){
    let sum = 0;

    while(num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    return sum;
}


console.log(isHappyNumber(4))