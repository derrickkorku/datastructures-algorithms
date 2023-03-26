/**
 * An input array containing non-zero integers is given, where the value at each index represents the number of places to skip forward (if the value is positive) or backward (if the value is negative). When skipping forward or backward, wrap around if you reach either end of the array. For this reason, we are calling it a circular array. Determine if this circular array has a cycle. A cycle is a sequence of indices in the circular array characterized by the following:

    The same set of indices is repeated when the sequence is traversed in accordance with the aforementioned rules.
    The length of the sequence is at least two.
    The loop must be in a single direction, forward or backward.
 */

    function hasCycle(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            let slow = i;
            let fast = nextIndex(i, arr);
        }
    }

    function nextIndex(currentIndex, arr){
        let n = arr.length;

        let next = (currentIndex + arr[currentIndex]) % n;

        return next >= 0 ? next : next + n;
    }