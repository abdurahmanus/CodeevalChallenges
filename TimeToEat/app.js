var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        TimeToEat(line);
    }
});

function TimeToEat(line) {
    var timeStamps = line.split(" ").map(function (timeStamp) {
        var fragments = timeStamp.split(":");
        return new Date(0, 0, 0, fragments[0], fragments[1], fragments[2]);
    });
    timeStamps = timeStamps.sort(function (a, b) { return b - a }).map(function (d) {
        return CreateTimeString(d.getHours(), d.getMinutes(), d.getSeconds());
    });
    console.log(timeStamps.join(" "));
}

function CreateTimeString(hours, minutes, seconds) {
    return (hours < 10 ? "0" + hours : "" + hours) + ":" +
    (minutes < 10 ? "0" + minutes : "" + minutes) + ":" +
    (seconds < 10 ? "0" + seconds : "" + seconds);
}
