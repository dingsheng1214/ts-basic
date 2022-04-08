/**
 * doc: 函数类型表达式
 * fn: (a: string) => void
 */

function greeter(fn: (a: string) => void) {
    fn('hello world')
}

function printToConsole(text: string) {
    console.log(text);
}

greeter(printToConsole)
