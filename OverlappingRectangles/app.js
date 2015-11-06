var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        overlappingRectangles(line);
    }
});

function overlappingRectangles(line) {
    //y
    // |
    // |    
    // | x0,y0________ 
    // |     |        |
    // |     |________|
    // |              x1, y1
    // |________________
    //                  x
    var coords = line.trim().split(",").map(function (c) { return parseInt(c); }),
        a = {
            x0: coords[0],
            y0: coords[1],
            x1: coords[2],
            y1: coords[3]
        },
        b = {
            x0: coords[4],
            y0: coords[5],
            x1: coords[6],
            y1: coords[7]
        }
    console.log(intersects(a, b) ? "True" : "False");
}

function intersects(a, b) {
    return !(a.y0 < b.y1 || a.y1 > b.y0 || a.x1 < b.x0 || a.x0 > b.x1);
}