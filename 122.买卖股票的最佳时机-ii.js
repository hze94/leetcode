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
  // let value = 0;
  /**
   * 贪心写法一：
   */
  // 标记是否买过
  // let hasBuy = false;
  // for (let i = 0; i < prices.length; i++) {
  //   if (i + 1 < prices.length && prices[i] < prices[i + 1] ) {  // 买入
  //     if (!hasBuy) {
  //       value -= prices[i];
  //       hasBuy = true;
  //     }
  //   } else if (i + 1 === prices.length || prices[i] > prices[i + 1]) { // 卖出
  //     if (hasBuy) {
  //       value += prices[i];
  //       hasBuy = false;
  //     }
  //   }
  // }

  /**
   * 贪心写法二：大于前一天的时候卖并累计值
   */
  // for (let i = 1; i < prices.length; i++) {
  //   value += Math.max(prices[i] - prices[i - 1], 0);
  // }
  // return value;

  /**
   * 动规，f标识第i天的最大收益
   */
  const n = prices.length;
  // 1. 动规从1开始，避免边界判断
  prices.unshift(0);
  const f = new Array(n + 1);
  for (let i = 0; i < f.length; i++) {
    f[i] = new Array(2).fill(-Infinity);
  }
  f[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    // 卖股票
    f[i][0] = f[i - 1][1] + prices[i];
    // 买股票
    f[i][1] = f[i - 1][0] - prices[i];
    for (let j = 0; j < 2; j++) {
      f[i][j] = Math.max(f[i][j], f[i - 1][j]);
    }
  }
  return f[n][0];

};
// @lc code=end

