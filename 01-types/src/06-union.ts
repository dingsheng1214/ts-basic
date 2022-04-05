/**
 * let id: number | string
 *                ↓
 *                ↓ union
 *                ↓
 *         两个或多个其他类型组成的类型
 *         可能是这些类型中的任何一种
 */

function printId(id: number | string) {
    // 通过if判断 缩小类型范围
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed());
    }
}

printId(101)
printId('hello world')
// printId({id: 101})


function welcome(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log(`Hello, ${x.join(' and ')}`);
    } else {
        console.log(`Hello, ${x}`);
    }
}
welcome('A')
welcome(['a', 'b', 'c'])
