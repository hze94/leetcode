/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1, right = n;
  while (left < right) {
    // 避免整数溢出
    const mid = Math.floor(left + (right - left) / 2);
    const result = guess(mid);
    if (result === 0) return mid;
    else if (result === -1) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};
// @lc code=end

