/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  //  i
  // [1, 2, 2, 3, 1]
  let ans = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      const value = map.get(num);
      value.lastIndex = i;
      value.count += 1;
      map.set(num, value);
    } else {
      map.set(num, {
        value: num,
        count: 1,
        firstIndex: i,
        lastIndex: i
      });
    }
  }
  let maxCount = 0;
  for ([key, valueObj] of map) {
    const { firstIndex, lastIndex, count } = valueObj;
    const len = lastIndex - firstIndex + 1;
    if (count > maxCount) {
      ans = len;
      maxCount = count;
    } else if (count === maxCount) {
      ans = Math.min(ans, len);
    }
  }
  return ans;
};
// @lc code=end

