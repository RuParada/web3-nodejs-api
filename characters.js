
let characters = [
    { name: "Frodo", isRing: false },
    { name: "Bilbo", isRing: false },
];

function stilRing (characters, name) {
    characters.map( c => {
        if (c.name === name) {
            c.isRing = true;
        } else {
            c.isRing = false;
        }
    });
}

module.exports = { characters, stilRing }