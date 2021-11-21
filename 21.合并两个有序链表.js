/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //      l1
  // 1 2 4
  // 1 3 4
  //     l2

  // 1 1 2 3 4
  let head = null;
  let tail = null;
  function addNode(node) {
    if (head) {
      tail.next = node;
      tail = tail.next;
    } else {
      head = node;
      tail = node;
    }
  }
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      addNode(l2);
      l2 = l2.next;
      continue;
    }
    if (l2 === null) {
      addNode(l1);
      l1 = l1.next;
      continue
    }
    if (l1.val <= l2.val) {
      addNode(l1);
      l1 = l1.next;
    } else {
      addNode(l2);
      l2 = l2.next;
    }
  }
  return head;
};
// @lc code=end

