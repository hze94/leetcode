/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0, right = x;
  while (left < right) {
    const mid = (left + right + 1) >> 1;
    // 取满足条件的最大值，避免整数越界，mid * mid <= x 转为 mid <= x / mid
    if (mid <= x / mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end

