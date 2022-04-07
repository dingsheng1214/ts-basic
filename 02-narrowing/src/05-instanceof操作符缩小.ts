/**
 * doc: instanceof 操作符缩小
 * 语法： object instanceof constructor
 * object： 某个实例对象
 * constructor: 某个构造函数
 *
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 *
 * const a = new A()
 * a.__proto__ === A.prototype  为true
 * a instanceof A 为true
 * Reflect.getPrototypeOf(a) === A.prototype 为true
 */

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x);
    }
}
logValue(new Date())
console.log('2022-04-07')
