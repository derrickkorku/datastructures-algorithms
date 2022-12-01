/**
 * Compare entries of two array
 */

let arr = [1,2,3,4];
let arr2 = [1, 2, 3, 4];
console.log(arr.length == arr2.length && arr.every((item, index) => item == arr2[index]));