var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        stackImplementation(line);
    }
});

function stackImplementation(line) {
    var temp = line.trim().split(" "),
        stack = [];
    temp.forEach(function(i) {
        stack.push(i);
    });
    var alternate = true,
        popped,
        result = [];
    while ((popped = stack.pop())) {
        if (alternate === true) result.push(popped);
        alternate = !alternate;
    }
    console.log(result.join(" "));
}