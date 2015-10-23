(function() {
    var isPrime = function(n) {
            if (n < 2) return false;
            for (var i = 2; i * i <= n; i++) {
                if (n % i === 0) return false;
            }
            return true;
        },
        isPalindrome = function(n) {
            if (n < 10) {
                return true;
            }
            var nString = n.toString(),
                length = nString.length;
            for (var i = 0, count = length / 2; i < count; i++) {
                if (nString[i] !== nString[length - i - 1]) return false;
            }
            return true;
        },
        n = 999;
    while (true) {
        if (isPrime(n) && isPalindrome(n)) break;
        n--;
    }
    console.log(n);
})();
//or just console.log(929);


