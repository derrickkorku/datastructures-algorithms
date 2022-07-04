let pattern = /\d+/g;
let str = "A string with 3 numbers in it ... 45 and 67";

while(match = pattern.exec(str)){
    console.log('Found match at', match[0], 'at index', match.index);
}