var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        if (happyNumbers(parseInt(line.trim()), []) === 1) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
});

function happyNumbers(number, history) {
    var newNumber = makeReplace(number);
    if (newNumber === 1 || history.indexOf(newNumber) >= 0) {
        return newNumber;
    } else {
        history.push(newNumber);
        return happyNumbers(newNumber, history);
    }
}

function makeReplace(number) {
    var summ;
    if (number < 10) {
        summ = number * number;
    } else {
        summ = 0;
        number.toString().split("").forEach(function (n) {
            var num = parseInt(n);
            summ += num * num;
        });
    }
    return summ;
}