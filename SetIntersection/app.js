var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        setIntersection(line);
    }
});

function setIntersection(line) {
    var temp = line.trim().split(";"),
        first = temp[0].split(","),
        second = temp[1].split(","),
        result = first.length >= second.length ? 
            findIntersection(first, second) : 
            findIntersection(second, first);
    if (result.length !== 0) {
        console.log(result.join(","));
    }
}

function findIntersection(small, large) {
    var result = [];
    small.forEach(function(n) {
        if (large.indexOf(n) >= 0) {
            result.push(n);
        }
    });
    return result;
}