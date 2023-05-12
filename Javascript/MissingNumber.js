/**
 * Find missing number in an array
 */

function optimalSolution(arr) {
    let xor = 0;
    for (let num of arr) {
        xor = xor ^ num;
    }

    for (let i = 0; i <= arr.length; i++) {
        xor  = xor ^ i;
    }

    return xor;
}

function mathsSolution(arr) {
    let n = arr.length;
    let totalSum = (n * (n + 1)) / 2;

    let arrSum = 0;
    for (let num of arr) {
        arrSum += num;
    }

    return totalSum - arrSum;
}

function finalSolution(arr) {
    let lookpup = {};

    for (let num of arr) {
        if (! lookpup[num]) {
            lookpup[num] = 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (! lookpup[i]) {
            return i;
        }
    }

    return -1;
}
const array = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(`Missing element in the array is ${optimalSolution(array)}`);
console.log(`Missing element in the array is ${mathsSolution(array)}`);
console.log(`Missing element in the array is ${finalSolution(array)}`);