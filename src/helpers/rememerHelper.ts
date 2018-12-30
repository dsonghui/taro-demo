/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/6/20
 */

export default function RememerHelper(func) {
    const cached = Object.create(null);
    return function (...arg) {
        let key = JSON.stringify(arg);
        if (cached[key] === undefined) cached[key] = func(...arg);
        return cached[key];
    };
}
