import TypeValid from "./TypeValid";
import { Identity} from "./Identity";

/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2017/12/20
 */

export default class DataValid {

  static IsNullOrWhiteSpece(v: string) {
    return v === null || v === undefined || v.trim().length === 0;
  }

  static isEmpty(val) {
    if (TypeValid.isArray(val)) {
      return val.length === 0;
    }
    if (TypeValid.isObject(val)) {
      return Object.keys(val).length === 0
    }
    return DataValid.IsNullOrWhiteSpece(val);
  }

  static isImageUrl(val) {
    return (/https?:\/\/.*?\.(jpg|png|gif|jpeg)/i).test(val);
  }

  static isMobile(val) {
    return (/1\d{10}/i).test(val);
  }

  static isSex(val) {
    return [1, 2].indexOf(Number(val)) !== -1;
  }
  static isBirthday(val) {
    return (/^\d{4}-\d\d-\d\d/).test(val) && new Date(val).getTime() < new Date().getTime();
  }
  static isIdentityCode(code) {
    return Identity.IsValid(code);
  }
}
