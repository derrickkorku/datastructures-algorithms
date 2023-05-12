/**
 * Find the number that has single instance in the array list
 */

function findSingleNumber(arr) {
    let lookup = {};

    for (let num of arr) {
        lookup[num] = lookup[num] ? ++lookup[num] : 1;
    }

    for (let key in lookup) {
        if (lookup[key] == 1) return key;
    }

    return -1;
}


function optimalSolution(arr) {
    let xor = 0;

    for (let num of arr) {
        xor = xor ^ num;
    }

    return xor;
}

const array = [4, 1, 2, 9, 1, 4, 2];
console.log(`Element appearing one time is ${findSingleNumber(array)}`);
console.log(`Element appearing one time is ${optimalSolution(array)}`);