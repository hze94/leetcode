/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 1. 判断是否是字母异位词
  // 2. 字母异位词组合到一起
  // 3. 存到结果中
  var result = new Map();

  // 判断是否是字母异位词
  function isSameType(a, b) {
    return a.split('').sort().join('') === a.split('').sort().join();
  }
  //          i
  // strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
  // result = []
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let key = str.split('').sort().join('');
    if (result.has(key)) {
      result.get(key).push(str);
    } else {
      result.set(key, [str]);
    }
  }
  return [...result.values()];
};
// @lc code=end

