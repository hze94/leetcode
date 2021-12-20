/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 思路：逐个合并区间
  var ans = [];
  // 先基于start排升序
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  intervals.forEach((interval, index) => {
    if (index === 0) ans.push(interval);
    else merge(interval);
  });
  return ans;
  function merge([start, end]) {
    const [lastStart, lastEnd] = ans[ans.length - 1];
    let newStart = lastStart, newEnd = lastEnd;
    if (start >= lastStart && start <= lastEnd) {
      newEnd = Math.max(lastEnd, end);
      ans[ans.length - 1] = [newStart, newEnd];
    } else {
      ans.push([start, end]);
    }
  }
};
// @lc code=end

