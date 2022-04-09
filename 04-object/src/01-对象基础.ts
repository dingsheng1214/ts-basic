/**
 * 匿名对象
 */
function greet1(person: {name: string, age: number}) {
    return `Hello ${person.name}`
}

/**
 * 接口类型
 */
interface Person2 {
    name: string,
    age: number
}
function greet2(person: Person2) {
   return `Hello ${person.name}`
}

/**
 * 类型别名
 */
type Person3 = {
    name: string,
    age: number
}
function greet3(person: Person3) {
    return `Hello ${person.name}`
}
