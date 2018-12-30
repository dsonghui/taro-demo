/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2017/12/20
 */

export default class MyGenerate {
    static uniqueString() {
        return MyGenerate.randomStr();
    }

    static randomStr(length = 32) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
