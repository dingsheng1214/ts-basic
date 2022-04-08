/**
 * doc: 需要了解的其它类型
 *
 * void:
 *
 * object: 指的是任何的不是基元的值(string, number, boolean, bigint, null, undefined, symbol), 不同于{} 也不同于 Object
 *
 */


/**
 * doc: unknown
 * 代表任何值，与any类似，但更安全，因为对未知 unknown值做任何事情都是不合法的
 */
function anyFun(a: any) {
   a.b()
}
function unknownFun(a: unknown) {
    // a.b()  // err: Property 'b' does not exist on type 'unknown'
}

/**
 * doc: never
 * 表示永远不会被观察到的值
 * 如果一个函数
 *      抛出异常
 *      程序终止
 *      死循环
 * 那么它的返回值类型就是never
 */
function neverFun(msg: string): never {
    throw new Error(msg)
}
