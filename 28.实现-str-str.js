/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // haystack = "hello", needle = "ll"
  // 方法一：使用内置函数
  return haystack.indexOf(needle);
  // 方法二：暴力穷举，needle跟haystack所有相同长度的子串匹配
  // O(nm)
  let n = haystack.length, m = needle.length;
  let substrs = [];
  // 穷举所有长为m的子串
  for (let i = 0; i < n; i++) {
    substrs.push({
      index: i,
      value: haystack.substr(i, m)
    });
  }
  // 比较
  for (let substr of substrs) {
    if (substr.value === needle) return substr.index;
  }
  return -1;
};
// @lc code=end

