//common js
fs = require('fs');
const { characters, stilRing } = require("./characters.js");

const data = fs.readFileSync("./data.json").toString();
console.log(data);

console.log(characters);

stilRing(characters, "Frodo");

for (const c of characters) {
    console.log(c);
}