/*
 * @lc app=leetcode.cn id=911 lang=javascript
 *
 * [911] 在线选举
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.persons = persons;
  this.times = times;
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  // 思路：需要查找解空间上t时刻领先的候选人，使用二分查找t时刻是第几张票即查找<=t的最大值的下标
  let left = 0, right = this.times.length - 1;
  while (left < right) {
    const mid = (left + right + 1) >> 1;
    // 满足条件，往右找
    if (this.times[mid] <= t) {
      left = mid;
    } else { // 不满足，往左找
      right = mid - 1;
    }
  }
  let map = new Map(), ansPerson;
  for (let i = 0; i <= left; i++) {
    const person = this.persons[i];
    const hasPerson = map.has(person);
    map.set(person, hasPerson ? map.get(person) + 1 : 1)
    // 由于ansPerson可能为0，因此不能使用!ansPerson来判断，需要使用ansPerson === undefined
    if (ansPerson === undefined || map.get(person) >= map.get(ansPerson)) {
      ansPerson = person;
    }
  }
  return ansPerson

};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end

