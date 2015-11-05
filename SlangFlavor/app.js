var nextPhraseGenerator = (function () {
    var slangPhrases = [
            ", yeah!",
            ", this is crazy, I tell ya.",
            ", can U believe this?",
            ", eh?",
            ", aw yea.",
            ", yo.",
            "? No way!",
            ". Awesome!"
        ],
        current = 0;
    return {
        next: function () {
            if (current > slangPhrases.length - 1)
                current = 0;
            return slangPhrases[current++];
        }
    }
})();

var isEven = true;

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        slangFlavor(line);
    }
});

function slangFlavor(line) {
    var temp = line.trim(),
        result = [],
        sentenceStart = 0,
        sentence;
    for (var i = 0, count = temp.length; i < count; i++) {
        if (".!?".indexOf(temp[i]) !== -1) {
            sentence = temp.substr(sentenceStart, i - sentenceStart).trim();
            result.push(processSentence(sentence, temp[i]));
            sentenceStart = i + 1;
        }
    }
    console.log(result.join(" "));
}

function processSentence(sentence, endPunctMark) {
    if ((isEven = !isEven) === true) {
        return sentence + nextPhraseGenerator.next();
    } else {
        return sentence + endPunctMark;
    }
}