/**
 * doc: 类型缩小： 从宽类型 ---> 窄类型 的过程
 *
 * 我们将 typeof 这些特殊的类型检查 称为 类型守卫
 * 将类型细化为比声明更具体的类型的过程 称为 类型缩小(类型缩小常用于联合类型场景)
 */

function padLeft(padding: number | string, input: string) {
    if (typeof padding === 'string') {
        return `${padding}${input}`
    } else {
        return new Array(padding + 1).join(' ') + input
    }
}

console.log(padLeft('hello ','world'));
console.log(padLeft(10, 'world'));
