function print1(pt: {x: number, y: number}) {
    console.log(`[${pt.x}, ${pt.y}]`);
}
print1({x: 100, y: 200})

/**
 * ? 可选属性
 */
function print2(pt: {x: number, y?: number}) {
    console.log(`[${pt.x}, ${pt?.y}]`);
}
print2({x: 100})



