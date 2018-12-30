/*
 * @Author: eric.liu
 * @Date: 2018-01-03 12:11:31
 * @Last Modified by:   mikey.zhaopeng
 * @Last Modified time: 2018-01-03 12:11:31
 */

function IsNullOrWhiteSpece(v: string) {
    return v === null || v === undefined || v.trim().length === 0;
}

export class Identity {
    static city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
    };

    /**
     * 验证身份证是否合法
     *
     * @static
     * @param {string} code
     * @returns {boolean}
     * @memberof Identity
     */
    static IsValid(code: string): boolean {
        if (IsNullOrWhiteSpece(code)
            || code.length !== 18
            || !(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i).test(code)
            || !Identity.city[code.substr(0, 2)])
            return false;
        // 18位身份证需要验证最后一位校验位
        let codeArr = code.split('');
        // ∑(ai×Wi)(mod 11)
        // 加权因子
        let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        // 校验位
        let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        let ai = 0;
        let wi = 0;
        for (let i = 0; i < 17; i++) {
            ai = parseInt(codeArr[i]);
            wi = factor[i];
            sum += ai * wi;
        }
        if (parity[sum % 11].toString() !== code[17]) {
            return false;
        }
        return true;
    }


    static GetIdentityInfo(code: string): IdentityInfo {
        let result = new IdentityInfo();
        result.IsValid = Identity.IsValid(code);
        if (result.IsValid) {
            let birth = code.substring(6, 14);
            result.BirthDay = birth.substring(0, 4) + '-' + birth.substring(4, 6) + '-' + birth.substring(6);
            result.Sex = parseInt(code.substring(16, 17)) % 2 === 1 ? 1 : 2;
        }
        return result;
    }
}

export class IdentityInfo {
    IsValid: boolean = false;
    BirthDay: string = '';
    /**
     * 1男,2女
     *
     * @type {number}
     * @memberof IdentityInfo
     */
    Sex: number = 0;
}
