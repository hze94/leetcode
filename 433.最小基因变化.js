/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  // 思路：序列的所有可能性为4^8，即问题总规模。序列最多变化4^8-1次。因为每次变化的是序列，即当前序列为一个状态（点），
  //      序列每次发生的变化为边，序列每次可能发生3*8=24中变化，即每个状态有24条出边。整个可以看做一张图
  //      题目求变化次数，即求点的最小层数，那么用广搜实现。

  // 使用set保存值，用于快速查找
  bank = new Set(bank);

  // 如果end不在bank中就直接返回-1，这步不是必须的，直接通过广搜也能判断，但这样性能更好些
  if (!bank.has(end)) return -1;

  // 使用map记录每个序列的访问层数
  var depth = new Map();
  depth.set(start, 0);
  // 基因序列
  var gene = ['A', 'C', 'G', 'T'];
  // 状态队列
  var q = [];
  q.push(start);
  while(q.length !== 0) {
    // 取当前状态
    const s = q.shift();
    // 出边，3*8=24中情况，需要满足在bank中
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 4; j++) {
        if (s[i] !== gene[j]) {
          // 变化基因，js中不能直接通过下标访问修改(ns[i] = gene[j]是无效的)
          let ns = s.split('');
          ns[i] = gene[j];
          ns = ns.join('');

          if (!bank.has(ns)) continue;
          // 走过的不要，广搜中第一次到得就是最小层数，因为状态的变化可能重复
          if (depth.has(ns)) continue;
          q.push(ns);
          depth.set(ns, depth.get(s) + 1);
          if (ns === end) {
            return depth.get(ns);
          }
        }
      }
    }
  }
  return -1;
};
// @lc code=end

