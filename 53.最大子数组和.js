/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // [-2,1,-3,4,-1,2,1,-5,4]
  // 状态转移方程：f[i] = max(f[i - 1], nums[i])，f[i]为以i为右端点的最大子序和
  let pre = 0, maxAns = nums[0];
  nums.forEach((item) => {
    pre = Math.max(pre + item, item);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
// @lc code=end

