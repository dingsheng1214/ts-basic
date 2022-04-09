/**
 * ？可选属性
 * readonly 只读
 */
type readonlyAndSelectable = {
   name?: string
   readonly age: number
}
const ras1: readonlyAndSelectable = {
   age: 12
}
// ras1.age = 13 // err: TS2540: Cannot assign to 'age' because it is a read-only property
