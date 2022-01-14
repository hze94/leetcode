/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // "   -42"
  let index = 0;
  let n = s.length;
  let sign = 1;
  let numStr = '';
  let value = 0;

  // 1. 丢弃前置无用空格
  while (index < n) {
    if (s.charAt(index) === ' ') index++;
    else break;
  }
  // 2. 检查正负
  if (index < n && (s.charAt(index) === '-' || s.charAt(index) === '+')) {
    sign = s.charAt(index) === '-' ? -1 : 1;
    index++;
  }
  // 3. 读取字符，直到非数字或结尾
  while (index < n) {
    if (index < n && /[0-9]/.test(s.charAt(index))) {
      numStr += s.charAt(index);
      index++;
    } else break;
  }
  if (numStr === '') return value;
  value = parseInt(numStr) * sign;
  // 4. 边界判断
  if (value > Math.pow(2, 31) - 1) value = Math.pow(2, 31) - 1;
  if (value < -Math.pow(2, 31)) value = -Math.pow(2, 31);
  return value;
};
// @lc code=end

