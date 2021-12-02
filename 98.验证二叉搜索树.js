/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return check(root, -Infinity, Infinity);
  function check(root, rangeLeft, rangeRight) {
    // 边界条件
    if (root === null) return true;
    if (root.val < rangeLeft || root.val > rangeRight) return false;
    return check(root.left, rangeLeft, root.val - 1)
            && check(root.right, root.val + 1, rangeRight);
  }
};
// @lc code=end

