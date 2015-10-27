var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        fibonacciSeries(line);
    }
});

function fibonacciSeries(line) {
    console.log(fibonacci(parseInt(line.trim())));
}

function fibonacci(n) {
    if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    } else {
        return n;
    }
}