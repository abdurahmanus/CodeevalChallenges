var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        aPileOfBricks(line);
    }
});

function aPileOfBricks(line) {
    var temp = line.trim().split("|"),
        hole = makeHole(temp[0]),
        bricks = temp[1].split(";").map(function(bs) {
            return makeBrick(bs);
        }),
        result = [];
    bricks.forEach(function(b) {
        if (testBrick(hole, b)) {
            result.push(b.index);
        }
    });
    console.log(result.length > 0 ? result.sort(function(a, b) { return a - b; }).join(",") : "-");
}

function makeHole(holeString) {
    var temp = holeString.split(" "),
        coords0 = parseCoords(temp[0]),
        coords1 = parseCoords(temp[1]);
    return {
        width: Math.abs(coords0[0] - coords1[0]),
        height: Math.abs(coords0[1] - coords1[1])
    };
}

function makeBrick(brickString) {
    var temp = brickString.replace(/[\(\)]/g, "").split(" "),
        index = parseInt(temp[0]),
        coords0 = parseCoords(temp[1]),
        coords1 = parseCoords(temp[2]);
    return {
        index: index,
        width:  Math.abs(coords0[0] - coords1[0]),
        height: Math.abs(coords0[1] - coords1[1]),
        depth: Math.abs(coords0[2] - coords1[2])
    }
}

function testBrick(hole, brick) {
    return testOneSide(hole, brick.width, brick.height) ||
        testOneSide(hole, brick.height, brick.width) ||
        testOneSide(hole, brick.height, brick.depth) ||
        testOneSide(hole, brick.depth, brick.height) ||
        testOneSide(hole, brick.depth, brick.width) ||
        testOneSide(hole, brick.width, brick.depth);
}

function testOneSide(hole, testWidth, testHeight) {
    return hole.width >= testWidth && hole.height >= testHeight;
}

function parseCoords(coordsString) {
    return coordsString.replace(/[\[\]]/g, "").split(",").map(function(c) {
        return parseInt(c);
    });
}