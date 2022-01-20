/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const box = [];
  for (let i = 0; i < 9; i++) {
    box[i] = new Set();
  }
  const row = [];
  for (let i = 0; i < 9; i++) {
    row[i] = new Set();
  }
  const col = [];
  for (let i = 0; i < 9; i++) {
    col[i] = new Set();
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];
      if (digit === '.') continue;
      if (row[i].has(digit)) return false;
      row[i].add(digit);
      if (col[j].has(digit)) return false;
      col[j].add(digit);
      const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);
      if (box[boxIndex].has(digit)) return false;
      box[boxIndex].add(digit);
    }
  }
  return true;
 };
// @lc code=end

