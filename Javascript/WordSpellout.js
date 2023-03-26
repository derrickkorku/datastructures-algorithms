// Spelling It Out

// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// Examples

// spellOut("bee") ➞ ["b", "be", "bee"]

// spellOut("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

// spellOut("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

function spellOut(word) {
    let w = '';
    const result = [];

    for (let i = 0; i < word.length; i++) {
        w += word[i];
        result.push(w);
    }

    return result;
}


console.log(spellOut('happy'));