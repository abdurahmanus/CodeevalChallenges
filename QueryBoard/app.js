var board = (function(rows, cols) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr.push([]);
        for (var j = 0; j < cols; j++) {
            arr[i].push(0);
        }
    }
    return arr;
})(256, 256);

var operations = (function(board) {
    return {
        SetRow: function (i, x) {
            board[i].forEach(function(cell, index, row) {
                row[index] = x;
            });
        },
        SetCol: function (j, x) {
            board.forEach(function(row) {
                row[j] = x;
            });
        },
        QueryRow: function(i) {
            var summ = board[i].reduce(function (sum, cell) {
                return sum + cell;
            }, 0);
            console.log(summ);
        },
        QueryCol: function(j) {
            var summ = board.reduce(function (sum, row) {
                return sum + row[j];
            }, 0);
            console.log(summ);
        }
    };
})(board);

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        queryBoard(line);
    }
});

function queryBoard(line) {
    var temp = line.trim().split(" "),
        operation = temp[0],
        args = temp.slice(1).map(function(n) { return parseInt(n); });
    operations[operation].apply(operations, args);
}