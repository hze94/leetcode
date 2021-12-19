/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  // 思路：使用二分查找解空间，解空间为最大包裹重量~总重量，我们需要求能满足能运完条件的最小值，属于不等式二分
  let left = Math.max(...weights), right = weights.reduce((a, b) => a + b);
  while (left < right) {
    const mid = (left + right) >> 1;
    const d = calc(mid);
    // 满足条件，往左边找最小值，满足点需要包含
    if (d <= days) {
      right = mid;
    } else {  // 不满足条件放不下，往右边找，mid不满足不需要包含
      left = mid + 1;
    }
  }
  return left;
  // 计算heft运力运完需要的天数
  function calc(heft) {
    // 需要的天数
    let days = 1
    // 当天的总负重
    let w = 0;
    for (weight of weights) {
      // 运不下就加一天
      if (w + weight > heft) {
        days++;
        w = 0;
      }
      w += weight;
    }
    return days;
  }
};
// @lc code=end

