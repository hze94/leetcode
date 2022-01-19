/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  /**
   * 分别求最长奇数串和偶数串
   */
  // babab
  let n = s.length;
  let ansLen = 0;
  let ansStart = 0;
  // 求奇数串，从每个字符向两边扩展
  for (let center = 0; center < n; center++) {
    let l = center - 1;
    let r = center + 1;
    while (l >= 0 && r < n && s[l] == s[r]) {
      l--;
      r++;
    }
    if (r - l - 1 > ansLen) {
      ansLen = r - l - 1;
      ansStart = l + 1;
    }
  }
  // 求偶数串，从每个字符向两边扩展
  for (let center = 1; center < n; center++) {
    let l = center - 1;
    let r = center;
    while (l >= 0 && r < n && s[l] == s[r]) {
      l--;
      r++;
    }
    if (r - l - 1 > ansLen) {
      ansLen = r - l - 1;
      ansStart = l + 1;
    }
  }
  return s.substr(ansStart, ansLen);
};
// @lc code=end

