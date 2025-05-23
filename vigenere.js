const letters = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, 
    t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

let word = "pass word!"; 
let key = "key";
let result = "";

for (let i = 0, keyIndexCounter = 0; i < word.length; i++) {
    let wordLetter = word[i].toLowerCase();

    if (wordLetter === " ") {
        continue;
    }

    if (!letters[wordLetter]) {
        result += word[i];
        continue;
    }

    let keyLetter = key[keyIndexCounter % key.length].toLowerCase();

    let wordIndex = letters[wordLetter];
    let keyIndex = letters[keyLetter];
    let newIndex = ((wordIndex + keyIndex - 1) % 26) + 1;
    let newLetter = Object.keys(letters).find(key => letters[key] === newIndex);

    result += newLetter;
    keyIndexCounter++;
}

console.log(result);
