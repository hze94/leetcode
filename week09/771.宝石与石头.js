/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let ans = 0;
  for (let ch of stones) {
    if (jewels.indexOf(ch) > -1) ans++;
  }
  return ans;
};
// @lc code=end

