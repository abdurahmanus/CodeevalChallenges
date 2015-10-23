var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        chardonnayOrCabernet(line);
    }
});

function chardonnayOrCabernet(line) {
    var temp = line.trim().split("|"),
        wineNames = temp[0].trim().split(" "),
        letters = temp[1].trim().split(""),
        result = [];
    
    wineNames.forEach(function (wineName) {
        if (isWineNameContainsAllLetters(wineName.split(""), letters)) {
            result.push(wineName);
        }
    });
    
    console.log(result.length !== 0 ? result.join(" ") : "False");
}

function isWineNameContainsAllLetters(wineLetters, letters) {
    var lettersCount = letters.length;
    letters.forEach(function (l) {
        var index = wineLetters.indexOf(l);
        if (index >= 0) {
            wineLetters[index] = null;
            lettersCount--;
        }
    });
    return lettersCount === 0;
}