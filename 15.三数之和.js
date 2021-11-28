/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // [-1,0,1,2,-1,-4]
  const ans = [];
  // 数组升序
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // console.log(i)
    const jks = twoSum(nums, i + 1, -nums[i]);
    for (jk of jks) {
      ans.push([nums[i], jk[0], jk[1]]);
    }
  }
  return ans;
};
var twoSum = function(nums, start, target) {
  let ans = [];
  let j = nums.length - 1;
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    while (i < j && nums[i] + nums[j] > target) {
      j--;
    }
    if (i < j && nums[i] + nums[j] === target) {
      ans.push([nums[i], nums[j]]);
    }
  }
  // console.log('ans', ans)
  return ans;
}
// @lc code=end

