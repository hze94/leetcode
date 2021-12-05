/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans = [];
  // 记录每个数是否选过
  const used = [];
  // 每个排列
  const p = [];
  choose(0);
  return ans;
  function choose(pos) {
    if (pos === nums.length) {
      ans.push([...p]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        p.push(nums[i]);
        // console.log(nums[i])
        used[i] = true;
        choose(pos + 1);
        used[i] = false;
        p.pop();
      }
    }
  }
};
// @lc code=end

