var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        cleanUpTheWords(line);
    }
});

function cleanUpTheWords(line) {
    var result = line.trim().match(/[a-zA-Z]+/g).map(function (w) { return w.toLowerCase(); }).join(" ");
    console.log(result);
}