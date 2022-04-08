/**
 * doc: 泛型约束
 * 约束泛型必须满足哪些条件
 */
function longest<T extends {length: number}>(a: T, b: T): T{
    if (a.length > b.length) return a
    return b
}

console.log(longest('a-abcd', 'b-abcdef'));
console.log(longest('a-abcdef', 'b-abcd'));

// err: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'
// console.log(longest(1234, 5678));
