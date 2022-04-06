let testString = 'Hello World'
testString = '千峰大前端'

const constantString = 'Hello World'
// constantString = '' // err: Attempt to assign to const or readonly variable

let hello : 'hello' = 'hello'
// hello = 'world' // err: Type '"world"' is not assignable to type '"hello"'

/**
 * doc: 字符串字面量
 * 拥有一个字符串类型的变量并没有什么用处，
 * 字符串变量的真正发挥作用还是要和 union 联合类型搭配使用
 */
function printText(s: string, alignment: 'left' | 'center' | 'right') {

}
printText('hello', 'center')
// printText('hello', 'top') // err: Argument of type '"top"' is not assignable to parameter of type '"left" | "center" | "right"'

/**
 * doc: 数字字面量
 */
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1
}

/**
 * doc: 字面量类型与其它类型的组合使用
 */
interface Options {
    width: number
}
function configure(x: Options | 'auto') {

}
configure({width: 100})
configure('auto')
