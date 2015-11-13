var billsAndCoins = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'HALF DOLLAR': 0.5,
    'ONE': 1,
    'TWO': 2,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'FIFTY': 50,
    'ONE HUNDRED': 100
};

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        cashRegister(line);
    }
});

function cashRegister(line) {
    var temp = line.trim().split(";"),
        purchasePrice = Number(temp[0]),
        cash = Number(temp[1]);
    console.log(getChange(purchasePrice, cash).join(","));
}

function getChange(purchasePrice, cash) {
    if (purchasePrice > cash) return ["ERROR"];
    if (purchasePrice === cash) return ["ZERO"];

    var change = cash - purchasePrice,
        changeInBillsAndCoins = [],
        nextBillOrCoin;

    change = +change.toFixed(2);
    while (change > 0) {
        nextBillOrCoin = findMaxBillOrCoin(change);
        changeInBillsAndCoins.push(nextBillOrCoin);
        change -= billsAndCoins[nextBillOrCoin];
        change = +change.toFixed(2);
    }
    return changeInBillsAndCoins;
}

function findMaxBillOrCoin(change) {
    var max = "PENNY";
    for (var key in billsAndCoins) {
        if (billsAndCoins.hasOwnProperty(key)) {
            if (billsAndCoins[key] <= change) {
                max = key;
            }
        }
    }
    return max;
}