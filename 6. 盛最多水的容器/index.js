// 笨逼法

// const maxArea = (height) => {
//     if (!Array.isArray(height)) return
//     let max = 0
//     const clacArea = (x, y) => x * y
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const temp = clacArea(j - i, Math.min(height[i], height[j]))
//             if (temp > max) max = temp
//         }
//     }
//     return max
// }

// 双指针

const maxArea = (height) => {

}