var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        readMore(line);
    }
});

function readMore(line) {
    var result = line.trim();
    if (result.length > 55) {
        result = trimString(result);
    }
    console.log(result);
}

function trimString(str) {
    var words = str.split(" "),
        result = "";
    if (words[0].length >= 40) {
        return str.substr(0, 40) + "... <Read More>";
    }
    for (var i = 0; i < words.length; i++) {
        if (result.length + words[i].length + 1 <= 40) {
            result += " " + words[i];
        } else {
            break;
        }
    }
    return result.trim() + "... <Read More>";
}