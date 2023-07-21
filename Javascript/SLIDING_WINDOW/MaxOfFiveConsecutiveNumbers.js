function maxOfFiveConsecutiveNumbers(arr){
    let max = Number.NEGATIVE_INFINITY

    for (let i = 0; i <= arr.length - 5; i++){
        let currentMax = 0;

        for (let j = i; j < i + 5; j++){
            currentMax += arr[j];
        }

        max = Math.max(max, currentMax);
    }

    return max;
}

function optimalSolution(arr){
    let currentSum = getArrSum(arr, 0, 4);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= arr.length - 5; i++){
        currentSum -= arr[i - 1];
        currentSum += arr[i + 4];

        max = Math.max(currentSum, max);
    }
}

function getArrSum(arr, start, end){
    let sum = 0;

    for (let i = start; i <= end; i++){
        sum += arr[i];
    }

    return sum;
}