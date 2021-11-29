/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // [1,2,3]

  const n = nums.length;
  const ans = [];
  // 当前选中的子集
  const chosen = [];
  recur(0);
  return ans;

  function recur(i) {
    if (i === n) {
      // 存结果，由于js数组是引用，需要拷贝存结果，不然会被后面pop掉
      ans.push([...chosen]);
      return;
    }
    recur(i + 1);

    chosen.push(nums[i]);
    recur(i + 1);
    chosen.pop(nums[i]);
  }

};
// @lc code=end

