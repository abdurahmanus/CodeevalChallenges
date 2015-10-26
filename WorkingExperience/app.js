var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        workingExperience(line);
    }
});

function workingExperience(line) {
    var periods = line.trim().split("; ").map(function(p) {
        var temp = p.split("-");
        return { from: Date.parse(temp[0]), to: Date.parse(temp[1]) };
    });
    console.log(periods);
}