var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        jsonMenuIds(line);
    }
});

function jsonMenuIds(line) {
    var json = JSON.parse(line.trim()),
        summ = 0;
    json.menu.items.forEach(function (item) {
        if (item && item.hasOwnProperty("label")) {
            summ += item.id;
        }
    });
    console.log(summ);
}
