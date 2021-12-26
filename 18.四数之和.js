/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // [1,0,-1,0,-2,2]

  /**
   * 使用排序+dfs搜索解法会超时，O(2^n)，复杂度不满足要求
   */
  // var ans = new Set();
  // var chosen = [];
  // nums.sort((a, b) => a - b);
  // function choose(i) {
  //   if (i === nums.length) {
  //     const newChosen = chosen.slice();
  //     if (newChosen.length === 4) {
  //       const sum = newChosen.reduce((sum, item) => {
  //         return sum + item;
  //       }, 0);
  //       if (sum === target) {
  //         ans.add(newChosen.join(','));
  //       }
  //     }
  //     return;
  //   }
  //   chosen.push(nums[i]);
  //   choose(i + 1);
  //   chosen.pop();

  //   choose(i + 1);
  // }
  // choose(0);
  // return [...ans].map(item => item.split(','));

  /**
   * 多项式解法，排序+双指针
   * 三层循环
   */
  const ans = []
  const len = nums.length;
  if (len < 4) return ans;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
        continue;
      }
      // 双指针扫描
      let left = j + 1, right = len - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          // 去重
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while(left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return ans;
};
// @lc code=end

