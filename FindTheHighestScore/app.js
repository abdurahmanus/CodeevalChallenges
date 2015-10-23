var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        findTheHighestScore(line);
    }
});

function findTheHighestScore(line) {
    var rows = line.split("|"),
        rawTable = [];
    
    rows.forEach(function (row) {
        var rowValues = row.trim().split(" ");
        rawTable.push(rowValues);
    });
    
    var table = rawTable[0].map(function (col, i) {
        return rawTable.map(function (row) {
            return parseInt(row[i]);
        });
    });
    
    var max = table.map(function (row) {
        return row.sort(function (a, b) { return b - a; })[0];
    });
    
    console.log(max.join(" "));
}
