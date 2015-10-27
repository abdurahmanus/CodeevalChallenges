var prevPassIndex;
var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        racingChars(line);
    }
});

function racingChars(line) {
    var section = line.trim().split(""),
        passIndex = section.indexOf("C");
    
    if (passIndex === -1)
        passIndex = section.indexOf("_");

    section[passIndex] = movementChar(prevPassIndex, passIndex);
    prevPassIndex = passIndex;
    console.log(section.join(""));
}

function movementChar(prevPassIndex, passIndex) {
    if (prevPassIndex === undefined || prevPassIndex === passIndex) {
        return "|";
    } else if (prevPassIndex < passIndex) {
        return "\\";
    } else {
        return "/";
    }
}