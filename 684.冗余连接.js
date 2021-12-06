/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  // 1. 找出节点总数
  let n = 0;
  for (let edge of edges) {
    const x = edge[0];
    const y = edge[1];
    n = Math.max(n, x, y);
  }
  // 2. 使用出边数组来存储图
  const to = new Array(n + 1).fill(0).map(() => new Array());
  const visited = new Array(n + 1).fill(false);
  let hasCycle = false;
  for (let edge of edges) {
    const x = edge[0];
    const y = edge[1];
    to[x].push(y);
    to[y].push(x);
    for (let i = 1; i <= n; i++) visited[i] = false;
    dfs(x, 0);
    if (hasCycle) return edge;
  }
  // 3. 图深搜dfs
  function dfs(x, father) {
    visited[x] = true;

    for (let y of to[x]) {
      if (y == father) continue;
      if (!visited[y]) {
        dfs(y, x);
      } else {
        hasCycle = true;
      }
    }
  }
};
// @lc code=end

