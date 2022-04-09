/**
 * doc: 交叉类型    type ColorfulCircle = Colorful & Circle
 */

interface  Colorful1{
   color: string;
}
interface Circle1{
   radius: number
}
type ColorfulCircle1 = Colorful1 & Circle1

const circle: ColorfulCircle1= {
    color: 'red',
    radius: 100,
    // type: 'Circle' err: Object literal may only specify known properties, and 'type' does not exist in type 'ColorfulCircle1'.
}
function draw(circle: Colorful1 & Circle1) {
    console.log(circle.color);
    console.log(circle.radius);
}
draw({
    color: 'red',
    radius: 10
})
