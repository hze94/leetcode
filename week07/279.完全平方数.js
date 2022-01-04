/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  /**
   * f[i]表示最少需要多少个数的平方来表示整数i
   */
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minn = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, f[i - j * j]);
    }
    f[i] = minn + 1;
  }
  return f[n];
};
// @lc code=end

