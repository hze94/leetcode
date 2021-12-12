/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function() {
  // 消息队列，按照时间顺序入队
  this.msgQueue = [];
  // 关注列表
  this.followMap = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.msgQueue.push([userId, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const followees = this.followMap.get(userId);
  const result = [];

  for (let i = this.msgQueue.length - 1; i >= 0; i--) {
    const [user, tweet] = this.msgQueue[i];
    if (user === userId || (followees && followees.has(user))) {
      result.push(tweet);
    }
  }

  return result.slice(0, 10);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  const followees = this.followMap.get(followerId);
  if (followees) {
    followees.add(followeeId)
  } else {
    this.followMap.set(followerId, new Set([followeeId]));
  }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  const followees = this.followMap.get(followerId) ?? new Set();
  followees.delete(followeeId)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

