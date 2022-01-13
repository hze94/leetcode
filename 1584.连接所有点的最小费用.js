/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  /**
   * 思路：n个点连接是一棵树，最小费用即求最小生成树，建边，排序然后用并查集合并
   */
  const n = points.length;
  // 建边，穷举所有边，共n(n-1)/2条
  const edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([i, j, Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])]);
    }
  }
  // 排序
  edges.sort((a, b) => a[2] - b[2]);
  console.log (edges)

  // 扫描每条边，用并查集合并
  let fa = [];
  let ans = 0;
  for (let i = 0; i < n; i++) fa[i] = i;
  function find(x) {
    if (x === fa[x]) return x;
    return fa[x] = find(fa[x]);
  }
  for (let edge of edges) {
    let x = edge[0];
    let y = edge[1];
    let z = edge[2];
    x = find(x);
    y = find(y);
    if (x != y) {
      ans += z;
      fa[x] = y;
    }
  }
  return ans;
};
// @lc code=end

