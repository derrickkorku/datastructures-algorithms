/**
 * Given a string sentence containing English letters (lower- or upper-case), return true if sentence is a Pangram, or false otherwise.
 *
 * A Pangram is a sentence where every letter of the English alphabet appears at least once.
 *
 * Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.
 */

class Pangram {
    static solution(sentence){
        let sentenceSet = new Set()

        for (let c of sentence.toLowerCase()){
            if (c.match(/[a-z]/)){
                sentenceSet.add(c);
            }
        }

        return sentenceSet.size === 26;
    }
}

// Test case 1: "TheQuickBrownFoxJumpsOverTheLazyDog"
// Expected output: true
console.log(Pangram.solution("TheQuickBrownFoxJumpsOverTheLazyDog"));

// Test case 2: "This is not a pangram"
// Expected output: false
console.log(Pangram.solution("This is not a pangram"));

// Test case 3: "abcdef ghijkl mnopqr stuvwxyz"
// Expected output: true
console.log(Pangram.solution("abcdef ghijkl mnopqr stuvwxyz"));

// Test case 4: ""
// Expected output: false
console.log(Pangram.solution(""));

// Test case 5: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Expected output: true
console.log(Pangram.solution("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));