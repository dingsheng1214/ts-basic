function combine<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2)
}

console.log(combine<string | number>([1, 2, '3'], [4, 5, '6']));
