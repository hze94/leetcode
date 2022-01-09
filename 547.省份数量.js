/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const provinces = isConnected.length;
  const parent = new Array(provinces).fill(0)
    .map((element, index) => index);

  for (let i = 0; i < provinces; i++) {
    for (let j = i + 1; j < provinces; j++) {
      if (isConnected[i][j] == 1) {
        union(parent, i, j);
      }
    }
  }
  let circles = 0;
  parent.forEach((element, index) => {
    if (element === index) {
      circles++;
    }
  });

  return circles;
};

const union = (parent, index1, index2) => {
  parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index]);
  }
  return parent[index];
}
// @lc code=end

