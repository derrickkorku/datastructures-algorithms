function pairSum(arr, target) {
    let mem = {};

    for (let i = 0 ; i < arr.length; i++) {
        let diff = Math.abs(target - arr[i]);

        if (diff in mem) {
            return [i, mem[diff]];
        }

        mem[arr[i]] = i;
    }

    return [];
}