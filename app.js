//common js
fs = require('fs');
const { states, timeChange } = require("./states.js");
const data = fs.readFileSync("./data.json").toString();

console.log(data);
console.log(states);

let newStates = states;
newStates = timeChange(states, "Day");

for (const state of states) {
    console.log(state);
}