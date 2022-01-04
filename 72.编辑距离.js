/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let n = word1.length;
  let m = word2.length;
  if (n * m === 0) return n + m;

  // 初始化n+1 * m+1的数组
  let f = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    f[i] = new Array(m + 1);
  }

  for (let i = 0; i < n + 1; i++) {
    f[i][0] = i;
  }
  for (let j = 0; j < m + 1; j++) {
    f[0][j] = j;
  }
  console.log(f)
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = f[i - 1][j] + 1;
      let down = f[i][j - 1] + 1;
      let leftDown = f[i - 1][j - 1];
      if (word1.charAt(i - 1) !== word2.charAt(j - 1)) {
        leftDown += 1;
      }
      f[i][j] = Math.min(left, Math.min(down, leftDown));
    }
  }
  return f[n][m];
};
// @lc code=end

