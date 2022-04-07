/**
 * never --> 不应该存在的类型
 * never可以分配给每个类型
 * 但是没有任何一个类型可以分配给never
 */
interface Circle {
    kind: 'circle';
    radius: number;
}
interface Square {
    kind: 'square';
    sideLength: number
}
type Shape1 = Circle | Square
function getArea(shape: Shape1) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * 2
        case 'square':
            return shape.sideLength ** 2
        default:
            // 走到 default的时候 既不是 circle 也不是 square
            // 当 联合类型 Shape1的有新成员加入的时候 就能拦截下来 做穷尽性检查
            const _exhaustiveCheck: never = shape
            return _exhaustiveCheck
    }
}
