/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 由于js最大表示数为2^53，因此这里不能转成number做
  // const res = (+digits.join('') + 1).toString().split('');

  let overflow = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = +digits[i];
    if (num + 1 === 10) {
      digits[i] = 0;
      overflow = true;
      continue;
    } else {
      digits[i] = num + 1;
      overflow = false;
      break;
    }
  }
  if (overflow) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end

