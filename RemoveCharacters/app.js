var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        removeCharacters(line);
    }
});

function removeCharacters(line) {
    var temp = line.trim().split(", "),
        pattern = new RegExp("[" + temp[1] + "]", "g"),
        result = temp[0].replace(pattern, "");
    console.log(result);
}