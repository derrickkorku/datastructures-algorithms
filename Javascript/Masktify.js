function mask(str){
    if (str.length <= 4) return str;

    strArr = str.split('');

    for (let i = 0; i < strArr.length - 4; i++){
        strArr[i] = "#";
    }

    console.log(strArr.join(''));
    return strArr.join('');
}

console.log(mask("4556364607935616"));  // "############5616"
console.log(mask("64607935616")) // --> "#######5616"
  // mask("1") --> "1"
  // mask("Skippy") --> "##ippy"
  // mask("Nananana Batman!") --> "############man!"