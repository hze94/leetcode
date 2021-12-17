/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // 三分查找，lmid = mid, rmid = lmid + 1;
  let left = 0, right = nums.length - 1;
  while(left < right) {
    const lmid = (left + right) >> 1;
    const rmid = lmid + 1;
    if (nums[lmid] <= nums[rmid]) left = rmid;
    else right = lmid;
  }
  return left;
};
// @lc code=end

