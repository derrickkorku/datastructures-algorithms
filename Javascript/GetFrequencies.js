function getFrequencies(arr){
    const obj = {};

    for (let x of arr){
        if (obj[x]) {
            obj[x] = ++obj[x];
        } else {
            obj[x] = 1;
        }       
    }

    return obj;
}


console.log(getFrequencies(["A", "B", "A", "A", "A"]));

console.log(getFrequencies([true, false, true, false, false]));