/**
 * doc: 函数重载
 * 重载签名：用于被调用
 * 实现签名：命中某个重载版本后，进入实现签名内执行
 */
// 重载签名 1
function makeDate(timestamp: number): Date;
// 重载签名 2
function makeDate(m: number, d: number, y: number): Date;
// 实现签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date{
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d)
    } else {
        return new Date(mOrTimestamp)
    }
}

const d1 = makeDate(12345678)
const d2 = makeDate(2022, 4, 8)
// const d3 = makeDate(5, 9) // err: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments
