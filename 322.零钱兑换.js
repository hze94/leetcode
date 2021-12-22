/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  /**
   * opt[i] 表示凑成金额i所需的最少硬币数，边界：opt[0] = 0, opt[i] = 1e9（正无穷）
   * 状态转移方程：opt[amount] = Min(opt[i - 1], opt[i - 9], opt[i - 10]) + 1
   */
  const opt = [];
  opt[0] = 0;
  for (let i = 1; i <= amount; i++) {
    opt[i] = 1e9;
    for (let j = 0; j < coins.length; j++) {
      // >=0 表示能凑
      if (i - coins[j] >= 0) {
        opt[i] = Math.min(opt[i], opt[i - coins[j]] + 1);
      }
    }
  }
  return opt[amount] >= 1e9 ? -1 : opt[amount];
};
// @lc code=end

