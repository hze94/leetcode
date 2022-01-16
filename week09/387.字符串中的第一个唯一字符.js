/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], {
      index: i,
      count: map.get(s[i]) ? map.get(s[i]).count + 1 : 1
    });
  }
  for (let [ch, {index, count}] of map) {
    if (count === 1) {
      return index;
    }
  }
  return -1;
};
// @lc code=end

