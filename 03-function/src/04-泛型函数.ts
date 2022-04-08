/**
 * doc: 泛型函数
 * 输入的类型与输出的类型有关，或者两个输入的类型以某种方式关联
 *
 *                           类型参数
 *                              ↓          ↓     ↓
 * function firstElementGeneric<T, R>(arr: T[]): R {
 *     return arr[0];
 * }
 */

// demo1
function firstElement1(arr: any[]): any {
   return arr[0]
}
console.log(firstElement1([1,2]));
console.log(firstElement1([1,'2']));


// demo2
function firstElementGeneric<T>(arr: T[]): T {
    return arr[0];
}
console.log(firstElementGeneric<number>([1,2]));
console.log(firstElementGeneric<string>(['1','2']));

// demo3
function map<In, Out>(arr: In[], fn: (arg: In) => Out): Out[] {
    return arr.map(fn);
}
console.log(map([1,2,3], e => e.toString()));
