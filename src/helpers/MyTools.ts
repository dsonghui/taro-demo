/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2017/12/20
 */

export default class MyTools {
  static generateLetterByIndex(index) {
    let letter: any = '';
    index = Number(index);
    if (isNaN(index)) return null;
    let letters = [
      "A", "B", "C", "D",
      "E", "F", "G", "H",
      "I", "J", "K", "L",
      "M", "N", "O", "P",
      "Q", "R", "S", "T",
      "U", "V", "W", "X",
      "Y", "Z"];
    if (index > 25) {
      letter = MyTools.generateLetterByIndex(parseInt((index / 26) as any) - 1);
      letter += MyTools.generateLetterByIndex(index % 26);
    } else {
      letter = letters[index];
    }
    return letter;
  }

  static addZero(val): string {
    return Number(val) > 9 ? String(val) : '0' + val;
  }


  static mapGetData(target, Obj) {
    if (target && Obj) {
      Object.keys(target).forEach((key) => {
        if (key in Obj) {
          if (Obj[key] === null) {
            target[key] = null;
            return;
          }
          if (typeof Obj[key] === 'object') {
            target[key] = MyTools.cloneObj(Obj[key]);
          } else {
            target[key] = Obj[key];
          }
        }
      });
    }
    return target;
  }

  static cloneObj(obj, noJson = false) {
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return;
    } else if (JSON && !noJson) {
      newobj = JSON.parse(JSON.stringify(obj));
    } else {
      Object.keys(obj).forEach((key) => {
        newobj[key] = typeof obj[key] === 'object' ? MyTools.cloneObj(obj[key]) : obj[key];
      });
    }
    return newobj;
  }

  static parseQueryString(str?) {
    if (!str) str = location.search ? location.search : location.hash.split('?').pop();
    // return querystring.parse(str);
  }

  static makeQueryString(obj) {
    //return querystring.stringify(obj)
    return obj;
  }

  static isWeixinBrowser() {
    return (/micromessenger/i).test(navigator.userAgent);
  }

  static isHttpUrl(url) {
    return (/^https?:\/\//i).test(url);
  }

  static IsNullOrWhiteSpece(v: string) {
    return v === null || v === undefined || String(v).trim().length === 0;
  }

}


/**
 * 判断终端类型
 */
export const detectOS = () => {
  const u = navigator.userAgent;

  /* eslint-disable one-var */
  const isMobile = !!u.match(/AppleWebKit.*Mobile.*/),
    /* 移动端 */
    isIPad = u.indexOf("iPad") > -1,
    isIPhone = u.indexOf("iPhone") > -1,
    isWebApp = u.indexOf("Safari") === -1,
    isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
    isWechat = u.toLowerCase().indexOf("micromessenger") > -1,
    /* pc 端 */
    isIE = u.indexOf("Trident") > -1,
    isOpera = u.indexOf("Presto") > -1,
    isChorme = u.indexOf("AppleWebKit") > -1,
    isFirefix = u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1;

  return {
    isMobile,
    isWechat,
    OS: (() => {
      if (isMobile) {
        if (isIOS) return "IOS";
        if (isIPad) return "iPad";
        if (isIPhone) return "IOS";
        if (isAndroid) return "Android";
      } else {
        if (isIE) return "IE";
        if (isOpera) return "Opera";
        if (isChorme) return "Chorme";
        if (isFirefix) return "Firefix";
      }
    })(),
    versions: (() => {
      return {
        /* 是否为移动终端 */
        mobile: isMobile,

        /* 是否为iPhone或者QQHD浏览器 */
        iPhone: isIPhone,
        /* android终端或uc浏览器 */
        android: isAndroid,

        /* ios终端 */
        ios: isIOS,
        /* 是否iPad */
        iPad: isIPad,

        /* 是否 web 程序，没有头部与底部 */
        webApp: isWebApp,

        /* IE内核 */
        trident: isIE,
        /* opera内核 */
        presto: isOpera,
        /* 苹果、谷歌内核 */
        webKit: isChorme,
        /* 火狐内核 */
        gecko: isFirefix
      };
    })()
  };
};
