var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        locks(line);
    }
});

function locks(line) {
    var temp = line.trim().split(" "),
        doorsCount = parseInt(temp[0]),
        doors = Array.apply(null, Array(doorsCount)).map(function () { return true; }),
        numberOfIterations = parseInt(temp[1]);
    for (var i = 0; i < numberOfIterations; i++) {
        doIteration(doors, i === numberOfIterations - 1);
    }
    console.log(calcOpenDoors(doors));
}

function doIteration(doors, isLast) {
    if (isLast === false) {
        firstBeat(doors);
        secondBeat(doors);
    } else {
        changeStateOfLastDoor(doors);
    }
}

function firstBeat(doors) {
    for (var i = 0, count = doors.length; i < count; i++) {
        if ((i + 1) % 2 === 0) doors[i] = false;
    }
}

function secondBeat(doors) {
    for (var i = 0, count = doors.length; i < count; i++) {
        if ((i + 1) % 3 === 0) doors[i] = !doors[i];
    }
}

function changeStateOfLastDoor(doors) {
    var last = doors.length - 1;
    doors[last] = !doors[last];
}

function calcOpenDoors(doors) {
    return doors.reduce(function (sum, current) {
        return sum + (current === true ? 1 : 0);
    }, 0);
}