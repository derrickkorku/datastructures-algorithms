function fibonacci(num){
    if (num <= 0){
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        let prevSeq = fibonacci(num - 1);
        let nextNum = prevSeq[prevSeq.length - 1] + prevSeq[prevSeq.length - 2];
        prevSeq.push(nextNum);

        return prevSeq;
    }
}

console.log(fibonacci(5));