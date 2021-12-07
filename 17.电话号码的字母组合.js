/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = [];
  map[2] = ['a', 'b', 'c'];
  map[3] = ['d', 'e', 'f'];
  map[4] = ['g', 'h', 'i'];
  map[5] = ['j', 'k', 'l'];
  map[6] = ['m', 'n', 'o'];
  map[7] = ['p', 'q', 'r', 's'];
  map[8] = ['t', 'u', 'v'];
  map[9] = ['w', 'x', 'y', 'z'];
  const ans = [];
  let chosen = '';
  const digitArr = digits.split('');
  if (digits === '') return [];
  recur(0);
  return ans;
  function recur(pos) {
    if (pos === digitArr.length) {
      ans.push(chosen);
      return;
    }
    const chars = map[digitArr[pos]];
    for(let i = 0; i < chars.length; i++) {
      chosen += chars[i];
      recur(pos + 1);
      chosen = chosen.substr(0, chosen.length - 1);
    }
  }
};
// @lc code=end

