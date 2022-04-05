function greet(name: string): void {
    console.log(`hello, ${name.toLowerCase()}!!`);
}

greet('zhangsan')


const names: string[] = ['张三', '李四', '王五']
names.forEach(name => {
    greet(name)
})
