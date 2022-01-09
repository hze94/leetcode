/**
 * @param {character[][]} grid
 * @return {number}
 */
class UnionFind {
  constructor(n) {
    this.count = n
    this.parent = new Array(n)
    this.size = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    // 元素数量小的接到数量多的下面
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }

  find(x) {
    while (this.parent[x] != x) {
      // 路径压缩
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  getCount() {
    return this.count;
  }
}

var numIslands = function (grid) {
  let m = grid.length;
  if (m === 0) return 0;
  let n = grid[0].length;
  const dummy = -1;
  const dirs = [[1, 0], [0, 1]];
  const uf = new UnionFind(m * n);
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++)
      if (grid[x][y] === '0') {
        uf.union(n * x + y, dummy)
      }
      //如果网格是1，则向右 向下尝试
      else if (grid[x][y] === '1') {
        for (let d of dirs) {
          let r = x + d[0];
          let c = y + d[1];
          if (r >= m || c >= n) continue;
          // 当前网格的右、下如果是1，则和当前网格合并
          if (grid[r][c] === '1') {
            uf.union(n * x + y, n * r + c);
          }
        }
      }
  }
  return uf.getCount();
};