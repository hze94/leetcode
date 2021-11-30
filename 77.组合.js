/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // [1, 2, 3, 4]
  const ans = [];
  // 当前选项
  const chosen = [];
  recur(1);
  return ans;
  function recur(i) {
    // 以下两种方法都行
    // 方法一：
    // 选满k个存结果，并剪枝
    if (chosen.length === k) {
      ans.push([...chosen])
      return;
    }
    // 都选完或剩余数量+已选不到k的也剪枝
    if (i === n + 1 || chosen.length + n - i + 1 < k) {
      return;
    }

    // 方法二：
    // 提前剪枝，数量大于k的结果不要以及剩余数量+已选数量不到k的不要
    // if (chosen.length > k || chosen.length + n - i + 1 < k) {
    //   return;
    // }
    // 都选完存结果
    // if (i === n + 1) {
    //   ans.push([...chosen]);
    //   return;
    // }

    recur(i + 1);
    chosen.push(i);
    recur(i + 1);
    chosen.pop();
  }
};
// @lc code=end

