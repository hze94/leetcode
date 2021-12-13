/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class BinaryHeap {
  constructor() {
    // 数组存放值，第0位占用
    this.heap = [Infinity];
  }
  // 二叉堆插入，push并向上调整到最大位置
  insert(value) {
    // 尾部插入
    this.heap.push(value);
    // 向上调整，至满足堆性质
    this._heapifyUp(this.heap.length - 1);
    // console.log(value.key, this.getMax().key);
  }
  _heapifyUp(p) {
    while (p > 1) {
      // p/2是父节点
      let father = Math.floor(p/2);
      if (this.heap[p].key > this.heap[father].key) {
         // 交换值
        let tmp = this.heap[father];
        this.heap[father] = this.heap[p];
        this.heap[p] = tmp;
        // 继续向上调整
        p = Math.floor(p/2);
      } else {
        break;
      }
    }
  }
  getMax() {
    return this.heap[1];
  }
  deleteMax() {
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this._heapifyDown(1);
  }
  _heapifyDown(p) {
    let child = p * 2; // 存较大的节点
    // 直到越界
    while(child < this.heap.length) {
      let other = p * 2 + 1;
      if (other < this.heap.length && this.heap[other].key > this.heap[child].key) child = other;
      if (this.heap[child].key > this.heap[p].key) {
        // 交换值
        let tmp = this.heap[child];
        this.heap[child] = this.heap[p];
        this.heap[p] = tmp;

        p = child;
        child = p * 2;
      } else {
        break;
      }
    }
  }
}
var maxSlidingWindow = function(nums, k) {
  // 思路：维护一个二叉堆，取最大值，取得时候判断是否在窗口内，不在则删除
  const maxHeap = new BinaryHeap();
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    maxHeap.insert({
      key: nums[i],
      index: i
    });
    // 开始取值
    if (i >= k - 1) {
      // 删除不合法的堆顶
      // console.log(maxHeap.getMax())
      while(maxHeap.getMax().index <= i - k) maxHeap.deleteMax();
      ans.push(maxHeap.getMax().key);
    }
  }
  return ans;
};
// @lc code=end

