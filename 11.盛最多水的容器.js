/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  //  i
  // [1,8,6,2,5,4,8,3,7]
  //                  j
  let i = 0;
  let j = height.length - 1;
  let ans = 0;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) i++;
    else j--;
  }
  return ans
};
// @lc code=end

