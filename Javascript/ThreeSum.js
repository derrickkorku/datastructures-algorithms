/**
 * Given an array of integers, nums, and an integer value, target, determine if there are any three integers in nums whose sum equals the target. 
 * Return TRUE if three such integers are found in the array. Otherwise, return FALSE.
 */

function threeSum(arr, target) {
    //Sort array in increase order
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++){

        //Skipe duplicates
        if (i > 0 && arr[i] == arr[i - 1]) {
            continue;
        }

        let left =  i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum == target) {
                return true;
            }

            if ( sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return false;
}

const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
console.log(threeSum(nums, target)); // Output: true