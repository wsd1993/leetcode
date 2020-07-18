// https://leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * 动态规划
 * @param {string} s
*/
const longestPalindrome = (s) => {
    if (s === '') return ''
    const len = s.length
    const map = new Array(len)
    let maxLen = 0
    let left, right
    // init dp
    for (let i = 0; i < len; i++) {
        const row = new Array(len)
        row[i] = true
        map[i] = row
    }

    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (j - i === 1) {
                map[i][j] = s[i] === s[j]
            } else {
                map[i][j] = (s[i] === s[j]) && map[i+1][j-1]
            }
            if (map[i][j] && ((j - i + 1) > maxLen)) {
                maxLen = j - i + 1
                left = i
                right = j
            }
        }
    }
    if (left || right) {
        return s.substring(left, right + 1)
    } else {
        return s[0]
    }
}