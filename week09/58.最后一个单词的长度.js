/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // "Hello World"
  s = ' ' + s;
  let ans = 0, n = s.length;
  let start, end;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] !== ' ' && end === undefined) {
      end = i;
      continue;
    }
    if (s[i] === ' ' && end !== undefined) {
      start = i + 1;
      break;
    }
  }
  return end - start + 1;
};
// @lc code=end

