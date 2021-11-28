/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  // 需要对值进行去重，通过map存储
  const map = new Map();
  const ans = [];
  for (domain of cpdomains) {
    const count = Number(domain.split(' ')[0]);
    const domainStr = domain.split(' ')[1];
    // 设置前检查是否存在，存在需要累加
    map.set(domainStr, map.has(domainStr) ? map.get(domainStr) + count : count)
    for (let i = 0; i < domainStr.length; i++) {
      const ch = domainStr.charAt(i);
      if (ch === '.') {
        const subDomain = domainStr.substr(i + 1);
        map.set(subDomain, map.has(subDomain) ? map.get(subDomain) + count : count)
      }
    }
  }
  for ([domain, count] of map) {
    ans.push(count + ' ' + domain);
  }
  return ans
};
// @lc code=end

