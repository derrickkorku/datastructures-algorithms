function findOddOccuringNumber(arr) {
    let xor = 0;

    for (let num of arr) {
        xor = xor ^ num;
    }

    return xor;
}

const array = [4, 3, 3, 4, 4, 4, 5, 3, 5];
console.log(`Odd occurring element is ${findOddOccuringNumber(array)}`);