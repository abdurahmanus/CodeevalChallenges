var months = {
    "Jan": 0,
    "Feb": 1,
    "Mar": 2,
    "Apr": 3,
    "May": 4,
    "Jun": 5,
    "Jul": 6,
    "Aug": 7,
    "Sep": 8,
    "Oct": 9,
    "Nov": 10,
    "Dec": 11
};

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        workingExperience(line);
    }
});

function workingExperience(line) {
    var periods = {};
    line.trim().split("; ").forEach(function (p) {
        var temp = p.split("-"),
            fromTemp = temp[0].split(" "),
            toTemp = temp[1].split(" "),
            from = {
                year: parseInt(fromTemp[1]),
                month: months[fromTemp[0]]
            },
            to = {
                year: parseInt(toTemp[1]),
                month: months[toTemp[0]]
            };
        splitByYears(from, to).forEach(function(s) {
            markMonthsOfOneYear(periods, s.year, s.fromMonth, s.toMonth);
        });
    });
    console.log(calcExperience(periods));
}

function splitByYears(from, to) {
    var result = [];
    if (from.year === to.year) {
        result.push({ year: from.year, fromMonth: from.month, toMonth: to.month });
    } else {
        for (var i = from.year; i <= to.year; i++) {
            if (i === from.year) {
                result.push({ year: i, fromMonth: from.month, toMonth: 11 });
            } else if (i === to.year) {
                result.push({ year: i, fromMonth: 0, toMonth: to.month });
            } else {
                result.push({ year: i, fromMonth: 0, toMonth: 11 });
            }
        }
    }
    return result;
}

function markMonthsOfOneYear(periods, year, fromMonth, toMonth) {
    if (!periods.hasOwnProperty(year)) {
        periods[year] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    for (var i = fromMonth; i <= toMonth; i++) {
        periods[year][i] = 1;
    }
}

function calcExperience(periods) {
    var monthCount = 0;
    for (var year in periods) {
        if (periods.hasOwnProperty(year)) {
            periods[year].forEach(function(m) {
                if (m === 1) monthCount++;
            });
        }
    }
    return Math.floor(monthCount / 12);
}