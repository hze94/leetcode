/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  /**
   * 思路：每一步都跳到能跳的更远的那一步，可以证明这种贪心做法能做到全局最优
   */
  //  i
  // [2,3,1,1,4]
  let steps = 0;
  let maxPosition = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;
};
// @lc code=end

