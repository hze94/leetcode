/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function(root) {
  var f = new Map();
  var g = new Map();
  dfs(root);
  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
    g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));
  }
  return Math.max(f.get(root) || 0, g.get(root) || 0);
};
// @lc code=end

