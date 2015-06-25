/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var length = nums.length;
    if (length === 0) {
        return nums;
    }
    var result = [];
    var each = "";
    var left = 0;
    for (var i = 0; i < nums.length; i++) {
        if (each === "") {
            each += nums[i];
        }
        left = i;
        while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
            i++;
        }
        if (left != i) {
            each += "->" + nums[i];
        }
        result.push(each);
        each = "";
    }
    return result;
};