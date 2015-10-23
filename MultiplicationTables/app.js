(function() {
    var r;
    for (var i = 1; i <= 12; i++) {
        r = [];
        for (var j = 1; j <= 12; j++) {
            r.push(("    " + i * j).slice(-4));
        }
        console.log(r.join("").trim());
    }
})();
