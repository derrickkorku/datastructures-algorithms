function revereseVowels(sentence){
    let firstVowel = -1;
    let secondVowel = -1;
    let j = sentence.length - 1;

    for(let i = 0; i < sentence.length; i++){
        if (isVowel(sentence[i]) && firstVowel === - 1){
            firstVowel = i;
            while (j > i){
                if (isVowel(sentence[j]) && secondVowel === - 1){
                    secondVowel = j;
                    sentence = sentence.replaceAt(firstVowel, secondVowel)

                    firstVowel = - 1;
                    secondVowel = -1;
                    j--;
                    break;
                }

                j--;
            }
        }
    }

    return sentence;
}

String.prototype.replaceAt = function(firstIndex, secondIndex){
    let strArr = this.split('')

    let temp = strArr[firstIndex];
    strArr[firstIndex] = strArr[secondIndex];
    strArr[secondIndex] = temp;

    return strArr.join('');
};


function isVowel(c) {
    let vowels =  new Set(['a', 'A', 'e','E', 'i', 'I', 'o', 'O', 'u', 'U']);
   return vowels.has(c);
}

console.log(revereseVowels("hello"));
console.log(revereseVowels("DesignGUrus"))
console.log(revereseVowels("AEIOU"))