/**
 * 有时候我们不能提前知道一个类型的所有属性名称，但是我们知道这个值的形状，
 * 在这种情况下我们可以使用一个 索引签名 来描述可能的值的类型
 *
 * key为number
 *       ↓
 *       ↓
 *       ↓          key对应的value为string
 *       ↓             ↓
 * [index: number]: string;
 */

interface StringArray {
    [index: number]: string;
}
const myArray: StringArray = ['a', 'b']

interface TestString {
   [props: string]: number
}
let testString: TestString = {
    age: 36,
    height: 180
}

interface NotOk {
   [props: string]: number | string
   age: number
   // name: string // err: Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
