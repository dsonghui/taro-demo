/**
 * 私有变量
 */
const transMap = {
    'recipe': {},
};
['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四'].forEach((i, index) => {
    transMap[index] = i;
})

export function trans(key) {
    if (key === undefined || key === null) return '';
    let target = transMap;
    let keys = String(key).split('.');
    keys.forEach(k => {
        if (transMap.hasOwnProperty(k)) {
            target = transMap[k];
        } else {
            throw new Error('没有找到匹配的转换 需要转换的字段为:' + k)
        }
    });
    return target;
}
