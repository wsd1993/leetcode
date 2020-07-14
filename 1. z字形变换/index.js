// https://leetcode-cn.com/problems/zigzag-conversion/

const convert = (s, numRows) => {
    if (numRows === 1) return s
    let i = 0, loc = 0
    let down= true
    let rows = []
    let res = ''
    const len = Math.min(s.length, numRows)
    for (i; i < len; i++) {
        rows[i] = ''
    }
    for (c of s) {
        rows[loc] += c
        down ? loc++ : loc--
        if (loc === 0 || loc === len - 1) down = !down
    }
    for (row of rows) {
        res += row
    }
    return res
}