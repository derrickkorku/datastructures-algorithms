/**
 * Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.
 */
function palindrome2(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] != str[right]) {

            /**
             * Remove character from left
             */
            if (isValidPalindrome(left + 1, right, str)) {
                return true;
            }

            if (isValidPalindrome(left, right--, str)) {
                return true;
            }

            return false;

        }

        //Move pointers forward is characters match
        left++;
        right--;
    }

    return true;
}

function isValidPalindrome(left, right, str) {
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


console.log(palindrome2('RACEACAR'));