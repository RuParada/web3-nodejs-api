
let states = [
    { now: "Day", isNow: false },
    { now: "Night", isNow: false },
];

function timeChange (states, now) {
    return states.map( state => {
        if (state.now === now) {
            state.isNow = true;
        } else {
            state.isNow = false;
        }
    });
}

module.exports = { states, timeChange }