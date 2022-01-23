/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
class SegmentTree {
  constructor(data, merger) {
    this.data = data;
    this.tree = []
    this.merger = merger

    this.left = i => i * 2 + 1
    this.right = i => i * 2 + 2

    if (this.data.length) {
      this.build(0, 0, this.data.length - 1)
    }
  }

  build(i, l, r) {
    if (l === r) {
      this.tree[i] = this.data[l]
      return this.tree[i]
    }

    const mid = Math.floor((l + r) / 2)

    this.tree[i] = this.merger(
      this.build(this.left(i), l, mid),
      this.build(this.right(i), mid + 1, r)
    )

    return this.tree[i]
  }

  update(i, val) {
    const updateRange = (idx, l, r, i, val) => {
      if (l === i && r === i) {
        this.tree[idx] = val

        return this.tree[idx]
      }

      const mid = Math.floor((l + r) / 2)

      if (i <= mid) {
        this.tree[idx] = this.merger(
          updateRange(this.left(idx), l, mid, i, val),
          this.tree[this.right(idx)]
        )
      }

      if (i >= mid + 1) {
        this.tree[idx] = this.merger(
          this.tree[this.left(idx)],
          updateRange(this.right(idx), mid + 1, r, i, val),
        )
      }

      return this.tree[idx]
    }

    this.data[i] = val

    updateRange(0, 0, this.data.length - 1, i, val)
  }

  find(i, j) {
    if (i < 0 || j > this.data.length) {
      return 0
    }

    const findRange = (idx, l, r, i, j) => {
      const mid = Math.floor((l + r) / 2)

      if (l === i && r === j) {
        return this.tree[idx]
      }

      if (j <= mid) {
        return findRange(this.left(idx), l, mid, i, j)
      }
      if (i >= mid + 1) {
        return findRange(this.right(idx), mid + 1, r, i, j)
      }

      return this.merger(
        findRange(this.left(idx), l, mid, i, mid),
        findRange(this.right(idx), mid + 1, r, mid + 1, j)
      )
    }

    return this.data.length ? findRange(0, 0, this.data.length - 1, i, j) : 0
  }
}
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nt = new SegmentTree(nums, (a, b) => a + b)
};

/** 
* @param {number} i 
* @param {number} val
* @return {void}
*/
NumArray.prototype.update = function (i, val) {
  this.nt.update(i, val)
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function (i, j) {
  return this.nt.find(i, j)
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

