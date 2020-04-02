const hex = [
    '#ffffff',
    '#33bcad',
    '#ffff00',
    '#8781bd',
    '#f58220',
    '#8ed8f8',
    '#f6adcd',
    '#584099',
    '#ec008c',
    '#00aeef'
];

let key = {};
const alphabet = '0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for (let i in alphabet) {
    let char = alphabet[i];
    if (char === ' ') continue;
    let quo = Math.floor(i / hex.length);
    let rem = i % hex.length;
    key[char] = quo < 2 ? hex[rem] : [ hex[rem], hex[quo - 1] ];
}

export { key };
