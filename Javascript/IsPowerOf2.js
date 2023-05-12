// Alogirithm to determine if a number is a power of 2

function isPowerOf2(num) {
    if (num == 0) return false;

    while(num !== 1) {
        if (num & 1 !== 0) return false;
        num >>= 1;
    }

    return true;
}

function optimalSolution(num) {
    if (num == 0) return false;

    return num & (num - 1) == 0;
}