var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    var params;
    if (line !== "") {
        params = line.split(" ");
        FizzBuzz(params[0], params[1], params[2]);
    }
});

function FizzBuzz(x, y, count) {
    var symbol, output = [];
    for (var i = 1; i <= count; i++) {
        symbol = "";
        if (i % x === 0) {
            symbol += "F";
        }
        if (i % y === 0) {
            symbol += "B";
        }
        if (symbol === "") {
            symbol += i;
        }
        output.push(symbol);
    }
    console.log(output.join(" "));
}