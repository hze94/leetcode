/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  //  i
  // [2,7,11,15]
  //         j
  for (let i = 0; i < numbers.length; i++) {
    let j = numbers.length - 1;
    while(i < j && numbers[i] + numbers[j] >= target) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
      j--;
    }
  }
};
// @lc code=end

