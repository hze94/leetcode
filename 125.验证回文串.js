/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 构建字母数字字符
  s = s.toLowerCase();
  let sArr = s.split('');
  let chArr = sArr.filter(ch => {
    return /[0-9a-z]/.test(ch);
  });
  return chArr.join('') === chArr.reverse().join('');
};
// @lc code=end

