var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        jugglingWithZeros(line);
    }
});

function jugglingWithZeros(line) {
    var temp = line.trim().split(" "),
        binaryValue = [];
    for (var i = 0, count = temp.length; i < count; i += 2) {
        if (temp[i].length === 1) {
            binaryValue.push(temp[i + 1]);
        } else {
            binaryValue.push(Array(temp[i + 1].length + 1).join("1"));
        }
    }
    console.log(parseInt(binaryValue.join(""), 2));
}