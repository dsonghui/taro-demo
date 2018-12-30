/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2017/12/20
 */

let toString = Object.prototype.toString;

export default class TypeValid {

    static isArray(val) {
        return toString.call(val) === '[object Array]';
    }


    static isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
    }


    static isFormData(val) {
        return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }


    static isArrayBufferView(val) {
        var result;
        if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
            result = ArrayBuffer.isView(val);
        } else {
            result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
        }
        return result;
    }


    static isString(val) {
        return typeof val === 'string';
    }


    static isNumber(val) {
        return typeof val === 'number';
    }


    static isUndefined(val) {
        return typeof val === 'undefined';
    }


    static isObject(val) {
        return val !== null && typeof val === 'object';
    }


    static isDate(val) {
        return toString.call(val) === '[object Date]';
    }

    static isFile(val) {
        return toString.call(val) === '[object File]';
    }


    static isBlob(val) {
        return toString.call(val) === '[object Blob]';
    }


    static isFunction(val) {
        return toString.call(val) === '[object Function]';
    }
}
