var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        theMajorElement(line);
    }
});

function theMajorElement(line) {
    var numbers = line.trim().split(","),
        number,
        result = {};
    
    for (var i = 0, count = numbers.length; i < count; i++) {
        number = "" + numbers[i];
        if (result.hasOwnProperty(number)) {
            result[number]++;
        } else {
            result[number] = 1;
        }
    }
    
    console.log(findMajorElement(result, numbers.length) || "None");
}

function findMajorElement(numbersObj, numbersCount) {
    for (var key in numbersObj) {
        if (numbersObj.hasOwnProperty(key)) {
            var count = numbersObj[key];
            if (count > numbersCount / 2) {
                return key;
            }
        }
    }
    return null;
}