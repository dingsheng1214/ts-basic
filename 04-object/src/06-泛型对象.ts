// demo1
interface Box<T> {
   content: T
}
let box: Box<string> = {
   content: '内容'
}

function setContent<T>(box: Box<T>) {
   console.log(box.content);
}
setContent(box)


interface Apple {
   // ...
}
type AppleBox = Box<Apple>


// demo2
type OrNull<T> = T | null
type OneOrMore<T> = T | T[]
type OneOrMoreOrNull<T> = OneOrMore<T> | OrNull<T>
