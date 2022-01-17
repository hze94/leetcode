/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // 贪心思路：双指针，如果字符不同则分别考虑删去一端后的子串是否是回文，O(n)
  //  l
  // "abca"
  //     r
  function checkPart(l, r) {
    while (l < r) {
      if (s[l] === s[r]) {
        l++;
        r--;
      } else return false;
    }
    return true;
  }
  let n = s.length, l = 0, r = n - 1;
  while(l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      return checkPart(l, r - 1) || checkPart(l + 1, r);
    }
  }
  return true;
};
// @lc code=end

