/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  // [-2, 0, -3]
  // [-2, -2, -3]
  this.s = [];
  // push每次栈push后的最小值，并同步pop
  this.minS = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.s.push(val);
  if (this.minS.length > 0) {
    this.minS.push(Math.min(this.minS[this.minS.length - 1], val));
  } else {
    this.minS.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.s.pop();
  this.minS.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.s[this.s.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minS[this.minS.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

