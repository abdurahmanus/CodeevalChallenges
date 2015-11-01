var rules = {
    "Vampires": 3,
    "Zombies": 4,
    "Witches": 5
};

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        trickOrTreat(line);
    }
});

function trickOrTreat(line) {
    var temp = line.trim().split(", "),
        costumes = temp.slice(0, temp.length - 1).map(function (c) {
            var temp = c.split(": ");
            return {
                costumeName: temp[0],
                count: parseInt(temp[1])
            };
        }),
        housesCount = parseInt(temp[temp.length - 1].split(" ")[1]),
        childrenCount = 0,
        oneHouseResult = 0,
        result;
    
    costumes.forEach(function (c, i) {
        childrenCount += c.count;
        oneHouseResult += rules[c.costumeName] * c.count;
    });
    
    result = Math.floor((oneHouseResult * housesCount) / childrenCount);
    console.log(result);
}