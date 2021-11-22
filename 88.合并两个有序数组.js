/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  //     i
  // [1, 3, 0, 0, 0]
  // [1, 2, 4]
  //        j
  var result = [];
  var pos = m + n -1;
  var i = m - 1;
  var j = n - 1;
  while(pos >= 0) {
    if (i < 0) {
      nums1[pos--] = nums2[j--];
      continue;
    }
    if (j < 0) break;
    if (nums1[i] >= nums2[j]) {
      nums1[pos--] = nums1[i--];
    } else {
      nums1[pos--] = nums2[j--];
    }
  }
};
// @lc code=end

