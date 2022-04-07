/**
 * doc: 等值缩小
 *  === !== == !=
 */

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // 进入这里 证明 x和y的类型都是 string
        x.toLowerCase()
        y.toLowerCase()
    }
}
function printAll1(str: string | string[] | null) {
    if (str !== null) {
        if (typeof str === 'object') {
            for(const s of str) {
                console.log(s);
            }
        } else {
            console.log(str);
        }
    }
}

interface Container {
    value: number | null | undefined
}
function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {
        // 只有当 value 类型为 number 时 才能进入
        console.log(container.value);
    }
}
multiplyValue({value: 5}, 6)
multiplyValue({value: undefined}, 6) // null == undefined  结果为true
multiplyValue({value: null}, 6)
