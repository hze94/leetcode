/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return merge(0, lists.length - 1);
  function merge(l, r) {
    if (l === r) return lists[l];
    if (l > r) return null;
    const mid = Math.floor((l + r)/2);
    return mergeList(merge(l, mid), merge(mid + 1, r));
  }
  function mergeList(l, r) {
    // head/tail
    // protectNode

    // l
    // 1->4->5,
    // 2->3->4,
    // r
    if (l === null) return r;
    if (r === null) return l;
    if (l === null || r === null) return null;
    const head = tail = new ListNode();
    while(l !== null && r !== null) {
      if (l.val < r.val) {
        tail.next = l;
        l = l.next;
      } else {
        tail.next = r;
        r = r.next;
      }
      tail = tail.next;
    }
    tail.next = l === null ? r : l;
    return head.next;
  }
};
// @lc code=end

