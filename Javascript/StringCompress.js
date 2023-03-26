function Compress(s) {
    const result = [];

    let i = 0;
    let j = 0;

    while (j <= s.length) {
        if (s[i] === s[j]) {
            j++;
        } else {
            let num = j - i;
            if (num === 1)
                result.push(s[i]);
            else
                result.push(String(num), s[i]);
            i = j;
        }
    }
    return result.join('');
};

console.log(Compress('ccaaatsss')); // -> '2c3at3s'
console.log(Compress('ssssbbz')); // -> '4s2bz'
console.log(Compress('ppoppppp')); // -> '2po5p'


function unCompress(s) {
    let result = [];
    let j = 0;
    let i = 0;

    while (j < s.length) {
        let c = s[j];
        if (c >= '0' && c <= '9') {
            j++;
        } else {
            let num = Number(s.slice(i, j));
            for (let k = 0; k < num; k++) {
                result.push(c);
            }

            j++;
            i = j;
        }
    }

    return result.join('');
}

console.log(unCompress('2c3a1t'));