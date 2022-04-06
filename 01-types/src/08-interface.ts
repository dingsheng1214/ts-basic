/**
 * 接口 interface
 */
interface Point1 {
    x: number
    y: number
}
function printPoint1(p: Point1) {
    console.log(`[${p.x}, ${p.y}]`);
}
printPoint1({x: 100, y: 100})


/**
 * interface vs type
 */
// 1 interface通过 extends 扩展接口
interface Animal1 {
    name: string
}
interface Bird1 extends Animal1 {
    fly: boolean
}
const bird1: Bird1 = {
    name: '老鹰',
    fly: true
}
// 1 type 可以通过交叉类型来 扩展接口
type Animal2 = {
    name: string;
}
type Bird2 = Animal2 & {
    fly: boolean;
}
const bird2: Bird2 = {
    name: '老鹰',
    fly: true
}

// 2 接口可以重复定义，多次向同一个接口添加属性
interface MyWindow {
   count: number
}
interface MyWindow {
    title: string
}
const w: MyWindow = {
    count: 100,
    title: 'hello world'
}
// 2 type不可以重复定义
type MyWindow1 = {
    count: number
}
// type MyWindow1 = {
//     title: string
// }
