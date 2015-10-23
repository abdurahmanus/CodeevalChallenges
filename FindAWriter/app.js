var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        findAWriter(line);
    }
});

function findAWriter(line) {
    var temp = line.trim().split("|"),
        nameEncoded = temp[0],
        key = temp[1].trim().split(" ").map(function (k) { return parseInt(k); }),
        nameDecoded = "";
    for (var i = 0, count = key.length; i < count; i++) {
        nameDecoded += nameEncoded[key[i] - 1];
    }
    console.log(nameDecoded);
}
