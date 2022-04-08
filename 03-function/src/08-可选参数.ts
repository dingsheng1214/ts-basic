/**
 * doc: 可选参数
 *
 */

function f1(x?: number) {
    // ...
}
f1() // 正确
f1(10) // 正确

function myForEach<T>(arr: T[], callback: (value: T, index?: number) => void) {
    arr.forEach(callback);
}
const arr = [1,2,3]
myForEach(arr, e => console.log(e))
myForEach(arr, (e, i) => {
    console.log(e, i?.toFixed());
})
