/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) return null;
  if (root.val === key) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    // 如果有两个子节点，求后继先删除后继，在用后继节点代替当前节点
    let next = root.right;
    while(next.left !== null) next = next.left;
    root.right = deleteNode(root.right, next.val);
    root.val = next.val;
    return root;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};
// @lc code=end

