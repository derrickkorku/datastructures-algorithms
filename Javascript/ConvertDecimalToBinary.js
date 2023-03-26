function decimalToBinary(num){
    let binary = '';

    while(num > 0) {
        binary = (num & 1) + binary;
        num >>= 1;
    }

    return binary || '0';
}

console.log(decimalToBinary(26)); // Output: "11010"
console.log(decimalToBinary(10)); // Output: "1010"
console.log(decimalToBinary(0)); // Output: "0"