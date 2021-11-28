/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // a =   [1, 2, 3]

  //        i
  // sum = [1, 3, 6]
  // sum[l, r] = sum[r] - sum[l - 1] = k
  let ans = 0;
  let sums = [];
  sums[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  let map = new Map();
  for (let i = 0; i < sums.length; i++) {
    if (map.has(sums[i] - k)) {
      ans += map.get(sums[i] - k);
    }
    map.set(sums[i], map.has(sums[i]) ? map.get(sums[i]) + 1 : 1);
  }
  // 朴素穷举，O(n^2)，超时
  // for (let i = sums.length - 1; i > 0; i--) {
  //   for (let j = 0; j < i; j++) {
  //     if (sums[i] - sums[j] === k) ans++;
  //   }
  // }
  return ans;
};
// @lc code=end

