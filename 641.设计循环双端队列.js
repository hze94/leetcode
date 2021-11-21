/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.queue = [];
  this.size = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (!this.isFull()) {
    this.queue.push(value);
    return true;
  }

  return false;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (!this.isFull()) {
    this.queue.unshift(value);
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (!this.isEmpty()) {
    this.queue.pop();
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (!this.isEmpty()) {
    this.queue.shift();
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  return this.isEmpty() ? -1 : this.queue[this.queue.length - 1];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  return this.isEmpty() ? -1 : this.queue[0];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.queue.length === 0 ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.queue.length === this.size ? true : false;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

