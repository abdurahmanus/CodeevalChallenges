var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        mixedContent(line);
    }
});

function mixedContent(line) {
    var temp = line.trim(),
        digits = temp.match(/(\d)+/g),
        words = temp.match(/([a-zA-z])+/g);
    console.log([words ? words.join(",") : "", words && digits ? "|" : "", digits ? digits.join(",") : ""].join(""));
}