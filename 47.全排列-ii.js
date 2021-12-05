/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  // [1,1,2]
  // 解法一：求所有全排列然后去重
  // 解法二：求全排列的过程中过滤选过的数
  // 先排序用于剪枝
  nums = nums.sort((a, b) => a - b);
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
      // 剪枝
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
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

