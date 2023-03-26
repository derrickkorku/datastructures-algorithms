function findUniqueNumber(arr) {
    let map = {};

    for (let num of arr) {
        map[num] = map[num] ? ++map[num] : 1;
    }

    for (let num of arr) {
        if (map[num] == 1) {
            return num;
        }
    }

    return -1;
}

function optimalSolution(arr) {
    let xor = 0;

    for (let num of arr) {
        xor ^= num;
    }

    return xor;
}

const array = [4, 1, 2, 9, 1, 4, 2];
console.log(`Element appearing one time is ${findUniqueNumber(array)}`);
console.log(`Element appearing one time is ${optimalSolution(array)}`);