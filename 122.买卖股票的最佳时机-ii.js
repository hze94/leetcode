/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 贪心思路：当第二天的价格比第一天高时，买入股票
  let value = 0;
  /**
   * 写法一：
   */
  // 标记是否买过
  let hasBuy = false;
  for (let i = 0; i < prices.length; i++) {
    if (i + 1 < prices.length && prices[i] < prices[i + 1] ) {  // 买入
      if (!hasBuy) {
        value -= prices[i];
        hasBuy = true;
      }
    } else if (i + 1 === prices.length || prices[i] > prices[i + 1]) { // 卖出
      if (hasBuy) {
        value += prices[i];
        hasBuy = false;
      }
    }
  }

  /**
   * 写法二：大于前一天的时候卖并累计值
   */
  // for (let i = 1; i < prices.length; i++) {
  //   value += Math.max(prices[i] - prices[i - 1], 0);
  // }
  return value;
};
// @lc code=end

