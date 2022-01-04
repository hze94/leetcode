/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length;
  let farthest = 0;
  for (let i = 0; i < n; i++) {
    if (i <= farthest) {
      farthest = Math.max(farthest, i + nums[i]);
      if (farthest >= n - 1) return true;
    }
  }
  return false;
};
// @lc code=end

