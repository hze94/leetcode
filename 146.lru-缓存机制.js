/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    const result = this.map.get(key);
    // 删除后再插入来保证最新顺序
    this.map.delete(key);
    this.map.set(key, result);
    return result;
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 需要先删除，然后从最后插入，如果不删除直接覆盖会在之前key的位置覆盖
  if (this.map.has(key)) this.map.delete(key);
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    // 第一个元素即为最旧的元素
    this.map.delete(this.map.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */