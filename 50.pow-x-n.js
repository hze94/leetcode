/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  const temp = myPow(x, Math.floor(n / 2));
  const ans = n % 2 == 0 ? temp * temp : temp * temp * x;
  return ans;
};
// @lc code=end

