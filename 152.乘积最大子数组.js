/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  /**
   * 1. i为状态
   * 2. 每个状态i找两个代表（最优化目标）：
   * fmax[i]：以i为最后一个元素的子数组的乘积最大值
   * fmin[i]：以i为最后一个元素的子数组的乘积最小值
   * 3. 每个最优化目标之间的递推关系（考虑nums[i]可能是负数）：
   * fmax[i] = Math.max(fmin[i - 1] * nums[i], fmax[i - 1] * nums[i], nums[i])
   * fmin[i] = Math.min(fmin[i - 1] * nums[i], fmax[i - 1] * nums[i], nums[i])
   */
  const n = nums.length;
  const fmin = [nums[0]];
  const fmax = [nums[0]];
  // 遍历状态
  for (let i = 1; i < n; i++) {
    // 作出每个状态下的决策
    fmax[i] = Math.max(fmin[i - 1] * nums[i], fmax[i - 1] * nums[i], nums[i]);
    fmin[i] = Math.min(fmin[i - 1] * nums[i], fmax[i - 1] * nums[i], nums[i]);
  }
  // 遍历答案取最大
  let ans = fmax[0];
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, fmax[i]);
  }
  return ans;
};
// @lc code=end

