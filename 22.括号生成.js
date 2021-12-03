/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = [];
  if (n === 0) return [''];
  // 记忆结果
  if (map.has(n)) return map.get(n);
  // 子问题 S = (A)B
  for (let k = 1; k <= n; k++) {
    let A = generateParenthesis(k - 1);
    let B = generateParenthesis(n - k);
    for (a of A)
      for (b of B) 
        ans.push('(' + a + ')' + b);
  }
  map.set(n, ans);
  return ans;
};
var map = new Map();
// @lc code=end

