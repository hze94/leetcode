/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // [[2],[3,4],[6,5,7],[4,1,8,3]]
  /**
   * 动规递推公式：f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + c[i][j]
   * 边界，j = 0时：f[i][0] = f[i - 1][0] + c[i][0]
   * 边界，j = i时：f[i][i] = f[i - 1][i - 1] + c[i][i]
   */
  const n = triangle.length;
  const f = new Array(n);
  for (let i = 0; i < n; i++) {
    f[i] = new Array(triangle[i].length);
  }
  f[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    f[i][0] = f[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + triangle[i][j];
    }
    f[i][i] = f[i - 1][i - 1] + triangle[i][i];
  }
  let minTotal = f[n - 1][0];
  for (let j = 1; j < n; j++) {
    minTotal = Math.min(minTotal, f[n - 1][j]);
  }
  return minTotal;
};
// @lc code=end

