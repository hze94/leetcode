/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m).fill(0).map(item => new Array(n).fill(false)); 
  
  let ans = 0;
  // 遍历没有走过的点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        ans++;
        bfs(i, j);
      }
    }
  }
  return ans;
  function bfs(sx, sy) {
    // 队列用于实现广搜
    const q = [];
    // 方向数组，用于每个元素向外扩展出边计算
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    q.push([sx, sy]);
    while(q.length !== 0) {
      // 取队头
      const [x, y] = q.shift();
      // 队头扩展，四个方向出边
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        // 出界不要
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        // 0不要
        if (grid[nx][ny] === '0') continue; 
        // 走过了不要
        if (visited[nx][ny]) continue;
        q.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
};
// @lc code=end

