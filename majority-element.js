//Majority Element 
//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

/**
 * @param {number[]} num
 * @return {number}
 */
var majorityElement = function(num) {
    if (!num) {
        return;
    }
    var arr = [];
    for (var i = 0; i < num.length; i++) {
        if (arr[num[i]]) {
            arr[num[i]]++;
        } else {
            arr[num[i]] = 1;
        }
        if (arr[num[i]] >= num.length / 2) {
                return num[i];
        }
    }
};