var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        KnightMoves(line.trim());
    }
});

function KnightMoves(position) {
    var column = letterToIndex(position[0]),
        row = parseInt(position[1]),
        positions = possiblePositions(row, column);
    
    positions = positions.map(function (p) {
        return indexToLetter(p[0]) + p[1];
    });
    console.log(positions.sort().join((" ")));
}

function letterToIndex(letter) {
    return "abcdefgh".indexOf(letter) + 1;
}

function indexToLetter(index) {
    return "abcdefgh"[index - 1];
}

function possiblePositions(row, column) {
    var positions = [
        [column - 2, row + 1],
        [column - 2, row - 1],
        [column - 1, row + 2],
        [column - 1, row - 2],
        [column + 2, row + 1],
        [column + 2, row - 1],
        [column + 1, row + 2],
        [column + 1, row - 2]
    ];
    positions = positions.filter(function (c) {
        return c[0] > 0 && c[0] < 9 && c[1] > 0 && c[1] < 9;
    });
    return positions;
}
