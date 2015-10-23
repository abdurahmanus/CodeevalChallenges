var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        swapElements(line);
    }
});

function swapElements(line) {
    var temp = line.trim().split(":"),
        numbers = temp[0].trim().split(" ").map(function (n) { return parseInt(n); }),
        swapRules = temp[1].trim().split(", ");
    
    swapRules.forEach(function (r) {
        var temp2 = r.split("-");
        swap(parseInt(temp2[0]), parseInt(temp2[1]), numbers);
    });
    
    console.log(numbers.join(" "));
}

function swap(from, to, numbers) {
    if (from === to) {
        return;
    }
    var temp = numbers[from];
    numbers[from] = numbers[to];
    numbers[to] = temp;
}