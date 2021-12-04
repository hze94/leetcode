/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  // [1, 2, null, null, 3, 4, null, null, 5, null, null]
  // 思路：先序遍历树dfs，叶子节点的左右都为null，用于表示确定的一棵树
  const ansList = [];
  dfs(root);
  function dfs(root) {
    if (root === null) {
      ansList.push('null');
      return;
    }
    ansList.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  return ansList.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const seq = data.split(',');
  // 思路，从头开始用每个元素来创建每棵树的根节点
  let curr = 0;
  return restore();
  function restore() {
    if (seq[curr] === 'null') {
      curr++;
      return null;
    }
    const root = new TreeNode(Number(seq[curr]));
    curr++;
    root.left = restore();
    root.right = restore();
    return root;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

