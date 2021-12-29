/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /**
   * 遍历状态，记录历史最低点
   */
  // 历史最低点
  let min = Infinity;
  // 最大收益
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    max = prices[i] - min > max ? prices[i] - min : max;
    min = prices[i] < min ? prices[i] : min;
  }
  return max;
};
// @lc code=end

