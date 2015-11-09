var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        mthToLastElement(line);
    }
});

function mthToLastElement(line) {
    var temp = line.trim().split(" "),
        chars = temp.slice(0, temp.length - 1),
        index = parseInt(temp[temp.length - 1]);
    if (index <= chars.length) {
        console.log(chars[chars.length - index]);
    }
}