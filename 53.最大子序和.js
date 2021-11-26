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
  // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  //      i
  // [-2,-1, -4, 0, -1, 1, 2, -3, 1]
  // sum[l, r] = sum[r] - sum[l - 1]
  // max(sum[l, r]) = sum[r] - min(sum[l - 1])
  // [5,4,-1,7,8]

  //    [-1,  0, -2]
  // [0, -1, -1, -3]
  var sums = [0];
  var ans;
  var min = 0;
  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  for (let i = 1; i < sums.length; i++) {
    ans = (ans !== undefined) ? Math.max(ans, sums[i] - min) : sums[i];
    min = Math.min(min, sums[i]);
  }
  return ans;
};
// @lc code=end

