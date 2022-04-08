class Ctor {
    s: string
    constructor(s: string) {
        this.s = s
    }
}

type SomeConstructor = {
    new (s:string): Ctor
}

function fnDemo1(ctor: SomeConstructor) {
    return new ctor('hello')
}
const f = fnDemo1(Ctor)
console.log(f);


/**
 * 调用签名和构造签名同时使用
 */
interface CallOrConstructor {
    new (date: string): Date
    (d: number): number
}
function fnDemo2(date: CallOrConstructor) {
    let r1 = new date('2022-04-07')
    let r2 = date(100)
}

