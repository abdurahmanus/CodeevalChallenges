var fs = require("fs"),
    fileSizeInBytes = fs.statSync("input.txt")["size"];
console.log(fileSizeInBytes);