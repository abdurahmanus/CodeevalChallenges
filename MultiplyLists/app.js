var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        multiplyLists(line);
    }
});

function multiplyLists(line) {
    var temp = line.trim().split(" | "),
        first = temp[0].split(" "),
        second = temp[1].split(" "),
        result = first.map(function (f, i) {
            return parseInt(f) * parseInt(second[i]);
        });
    console.log(result.join(" "));
}
