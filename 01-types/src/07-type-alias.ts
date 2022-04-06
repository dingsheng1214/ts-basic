/**
 * 类型别名

 *
 *
 * type UserInputSanitizedString = string
 */
type Point = {
    x: number;
    y: number
}
function printPoint(point: Point): void {
    console.log(`[${point.x}, ${point.y}]`);
}
printPoint({x: 100, y: 100})


type ID = number | string
function printId(id: ID) {
    console.log(`id: ${id}`);
}
printId(101)
printId('101')
