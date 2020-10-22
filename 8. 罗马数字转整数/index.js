/**
 * @param {string} s
 * @return {number}
 */

const getValue = (s) => {
    switch (s) {
        case 'I': return 1
        case 'V': return 5
        case 'X': return 10
        case 'L': return 50
        case 'C': return 100
        case 'D': return 500
        case 'M': return 1000
    }
}

const romanToInt = (s) => {
    if (typeof s !== 'string') return
    let res = 0
    let prev = 0
    while(s) {
        if ((prev && prev <= getValue(s[s.length - 1])) || prev === 0) {
            res += getValue(s[s.length - 1])      
        } else {
            res = res - getValue(s[s.length - 1])
        }
        prev = getValue(s[s.length - 1])
        s = s.substring(0, s.length - 1)
    }
    return res
}