/*
 * @lc app=leetcode.cn id=1334 lang=javascript
 *
 * [1334] 阈值距离内邻居最少的城市
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  /**
   * 思路：用floyd算法求两点之间的最短路径，枚举任意两点之间的最短路，求最小值
   */
  // 创建邻接矩阵存放图
  let d = new Array(n);
  for (let i = 0; i < n; i++) {
    d[i] = new Array(n).fill(1e9);
  };
  for (let i = 0; i < n; i++) d[i][i] = 0;
  for (let edge of edges) {
    let x = edge[0];
    let y = edge[1];
    let z = edge[2];
    // 需要双向联通
    d[x][y] = d[y][x] = z;
  }
  console.log(JSON.stringify(d))

  // 动规递推
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 两点之间的最短路径或者以k为中继的最短路径和之间去最小值
        d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
      }
    }
  }   
  console.log(JSON.stringify(d))
  // 枚举各个点之间的最短路径，取复合条件的值
  let minNeighbour = 1e9;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let neighbour = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && d[i][j] <= distanceThreshold) neighbour++;
    }
    if (neighbour < minNeighbour || 
      (neighbour === minNeighbour && i > ans)) {
      minNeighbour = neighbour;
      ans = i;
    }
  }
  return ans;
};
// @lc code=end

