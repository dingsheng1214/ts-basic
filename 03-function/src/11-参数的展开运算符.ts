/**
 * doc: 参数的展开运算符 ...
 */

// 形参展开运算符
function multiplyValue(n: number, ...m: number[]) {
    return m.map(x => x * n)
}
console.log(multiplyValue(10, 1, 2, 3, 4));

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// 实参展开运算符
arr1.push(...arr2)
