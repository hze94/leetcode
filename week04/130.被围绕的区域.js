/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // 思路：遍历没有访问过得O，深搜记录直到其他方向都是X为止，标记为访问过并填充为O，但是很难判断一个O的及其他方向是否都是X，因此这种思路不好实现
  // 正确思路：从边界上的O出发进行搜索，标记与其相邻的O，然后将这些O改为X

  const m = board.length;
  const n = board[0].length;
  const used = new Array(m).fill(0).map(item => new Array(n).fill(false));
  // 方向数组
  const dx = [-1, 0, 0, 1];
  const dy = [0, 1, -1, 0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i === m - 1 || j === n - 1)
        dfs(i, j);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X';
      if (board[i][j] === 'A') board[i][j] = 'O';
    }
  }
  return board;
  function dfs(x, y) {
    // 越界退出
    if (x < 0 || x >= m || y < 0 || y >= n) return;
    if (board[x][y] === 'O' && !used[x][y]) {
      board[x][y] = 'A';
      used[x][y] = true;
      // 四个方向出边
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        dfs(nx, ny);
      }
    }
  }
};
// @lc code=end

