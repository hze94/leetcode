/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // 思路：
  // 1. 遍历每行，使得每行上皇后的列号都不同，这样就相当于不同列号的全排列就能确保皇后横纵不能攻击
  // 2. 对角线不能攻击意味着i+j和i-j相同的位置只能用一次，因此在全排列的基础上剪枝掉这部分结果即可
  const ans = [];
  const used = [];
  const usedPlus = new Set();
  const usedMinus = new Set();
  const p = [];

  const result = [];
  dfs(0);
  for (cols of ans) {
    const board = new Array(n).fill(0).map(row => new Array(n).fill('.'));
    for (let row = 0; row < n; row++) {
      board[row][cols[row]] = 'Q';
      board[row] = board[row].join('');
    }
    result.push(board);
  }

  return result;
  function dfs(row) {
    if (row === n) {
      // 记录结果
      ans.push([...p]);
      return;
    }
    // 选一个没选过的列号
    for (let col = 0; col < n; col++) {
      if (!used[col] && !usedPlus.has(row + col) && !usedMinus.has(row - col)) {
        p.push(col);
        used[col] = true;
        usedPlus.add(row + col);
        usedMinus.add(row - col);
        dfs(row + 1);
        usedMinus.delete(row - col);
        usedPlus.delete(row + col);
        used[col] = false;
        p.pop();
      }
    }
  }
};
// @lc code=end

