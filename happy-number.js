/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var set = new Set();
    while (!set.has(n)) {
        set.add(n);
        if (n === 1) {
            return true;
        }
        n = nextHappyNumber(n);
    }
    return false;
};

var nextHappyNumber = function (n) {
    var result = 0;
    while (n >= 1) {
        result = result + (n % 10) * (n % 10);
        n = parseInt(n / 10);
    }
    return result;
}