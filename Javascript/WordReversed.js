/**
 * Given a sentence, reverse the order of its words without affecting the order of letters within a given word.
 */

function wordReversed(sentence) {
    let words = sentence.split(' ');
    
    let len = words.length;

    for (let i = 0; i < len / 2; i++){
        let end = words[len - 1 - i];
        let beg = words[i];

        words[i] = end;
        words[len - 1 - i] = beg;
    }

    return words.join(' ')
}

const str = 'The quick brown fox jumped over a lazy dog';
str2 = 'Hello Word';
console.log(wordReversed(str));