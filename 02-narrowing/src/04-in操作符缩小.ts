/**
 * doc: in操作符缩小
 * 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true
 *
 * +-------------------+  true   +--------------------------+
 * |   "value" in x    | ------> | x具有可选或必须属性的类型的值 |
 * +-------------------+         +--------------------------+
 *   |
 *   | false
 *   v
 * +------------------------------+
 * | x需要具有可选或缺失属性的类型的值 |
 * +------------------------------+
 */
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}
type Human = {
    swim?: () => void;
    fly?: () => void
}

function move(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        return (<Fish>animal).swim()
    }
    return (animal as Bird).fly()
}
