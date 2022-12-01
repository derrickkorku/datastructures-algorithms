/**
 * Make a string sentence case
 */

function sentenceCase(str){
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
}