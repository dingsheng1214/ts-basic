// interface Shape {
//     kind: 'circle' | 'square'
//     radius?: number
//     sideLength?: number
// }
// function getArea(shape: Shape) {
//     return Math.PI * shape.radius ** 2
// }
interface Circle {
   kind: 'circle';
   radius: number;
}
interface Square {
    kind: 'square';
    sideLength: number
}
type Shape = Circle | Square
function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * 2
        case 'square':
            return shape.sideLength ** 2
    }
}

