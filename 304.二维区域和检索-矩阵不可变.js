/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.sum = [];
  for (let i = 0; i < matrix.length; i++) {
    this.sum[i] = [];
    this.sum[i][0] = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      this.sum[i][j + 1] = this.sum[i][j] + matrix[i][j];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let ans = 0;
  for (let i = row1; i <= row2; i++) {
    ans += this.sum[i][col2 + 1] - this.sum[i][col1];
  }
  return ans;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

