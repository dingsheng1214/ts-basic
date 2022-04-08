/**
 * doc: 调用签名
 * 给函数表达式添加属性
 *
 * 语法：
 * type DescribableFunction = {
 *     description: string;
 *     (arg: number): boolean
 *                  ↓
 *                  ↓
 *                  在参数列表和返回类型之间使用的是 ：而不是 =>
 * }
 */

type DescribableFunction = {
    description: string
    (arg: number): boolean
}
function greeter_describable(fn: DescribableFunction) {
    console.log(`${fn.description} returned ${fn(5)}`);
}

function fn1(n: number) {
    return true
}
fn1.description = 'fn1'

greeter_describable(fn1)
