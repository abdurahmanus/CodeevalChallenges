var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        deltaTime(line);
    }
});

function deltaTime(line) {
    var temp = line.trim().split(" "),
        date1 = new Date("January 1, 1970 " + temp[0]),
        date2 = new Date("January 1, 1970 " + temp[1]),
        diff = new Date(Math.abs(date1.getTime() - date2.getTime()));
    printTime(diff);
}

function printTime(date) {
    var hours = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds();
    console.log("" + makeTimePart(hours) + ":" + makeTimePart(minutes) + ":" + makeTimePart(seconds));
}

function makeTimePart(t) {
    return t < 10 ? "0" + t : "" + t;
}