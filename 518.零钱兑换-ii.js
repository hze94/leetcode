/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // dp[i]表示能凑成金额为i的方案数
  var dp = new Array(amount + 1).fill(0);
  // 不取硬币时金额为0，有一种方案
  dp[0] = 1;
  for (coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
};
// @lc code=end

