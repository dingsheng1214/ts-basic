/**
 * doc: 真值缩小
 *
 * 5个 falsy值：
 *  0
 *  NAN
 *  "" (空字符串)
 *  null
 *  undefined
 *
 * 获取boolean值
 * Boolean('hello')
 * !!"world"
 */
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `现在共有 ${numUsersOnline} 人在线`
    }
    return '现在没人在线'
}

function printAll(str: string | string[] | null) {
    if (str && typeof str === 'object') {
        for(const s of str) {
            console.log(s);
        }
    } else if (typeof str === 'string') {
        console.log(str);
    } else {
        // null
    }
}
