var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        ageDistribution(line);
    }
});

function ageDistribution(line) {
    var age = parseInt(line.trim()),
        message;
    if (age < 0) {
        message = "This program is for humans";
    } else if (age <= 2) {
        message = "Still in Mama's arms";
    } else if (age <= 4) {
        message = "Preschool Maniac";
    } else if (age <= 11) {
        message = "Elementary school";
    } else if (age <= 14) {
        message = "Middle school";
    } else if (age <= 18) {
        message = "High school";
    } else if (age <= 22) {
        message = "College";
    } else if (age <= 65) {
        message = "Working for the man";
    } else if (age <= 100) {
        message = "The Golden Years";
    } else {
        message = "This program is for humans";
    }
    console.log(message);
}