var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    var splitRes;
    if (line !== "") {
        splitRes = line.trim().split(" ");
        stringMask(splitRes[0], splitRes[1]);
    }
});

function stringMask(word, mask) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
        result += mask[i] === "0" ? word[i].toLowerCase() : word[i].toUpperCase();
    }
    console.log(result);
}