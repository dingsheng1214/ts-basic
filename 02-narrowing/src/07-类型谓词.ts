/**
 * doc: 类型谓词
 *
 * 格式: parameterName is Type
 */
type Fish1 = {
    swim: () => void
}
type Bird1 = {
    fly: () => void
}
function isFish(pet: Fish1 | Bird1): pet is Fish1{
   return (pet as Fish1).swim !== undefined
}
