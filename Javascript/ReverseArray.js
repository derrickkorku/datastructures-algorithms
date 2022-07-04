/**
 * Ways of reversing arrays in javascript
 */

function reverseArray(items) {
    let arr = [];
    for (let i = items.length - 1; i >= 0; i--) {
        arr.push(items[i]);
    }

    return arr;
}

let arr = reverseArray([1, 2, 3, 4, 5]);
console.log(arr);


let arr2 = reverseArrayInPlace([1, 2, 3, 4, 5]);
console.log(arr2);


function reverseArrayInPlace(items) {
    for (let i = 0; i < Math.floor(items.length / 2); i++) {
        let prev = items[i];
        items[i] = items[items.length - 1 - i];
        items[items.length - 1 - i] = prev;
    }

    return items;

}