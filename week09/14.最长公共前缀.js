/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let ans = '';
  let str = strs[0];
  for (let ch of str) {
    let prefix = ans + ch;
    for (let s of strs) {
      if (s.indexOf(prefix) !== 0) {
        return ans;
      }
    }
    ans += ch;
  }
  return ans;
};
// @lc code=end

