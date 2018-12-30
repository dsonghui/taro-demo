const preKey = '2018-4-24';

export class CacheData {
  /**
   * 过期时间，秒
   */
  expire?: number;
  data: any;
  startTime: number;
  constructor() {
    this.startTime = new Date().getTime();
  }
}

export default class WxStorage {
  static set(key, value, expire = 0) {
    let data = new CacheData();
    data.data = value;
    if (expire) {
      data.expire = expire;
    }
    return wx.setStorageSync(preKey + key, JSON.stringify(data));
  }
  static get(key) {
    try {
      let temp = wx.getStorageSync(preKey + key);
      if (temp) {
        let data: CacheData = JSON.parse(temp);
        if (data.expire && data.startTime) {
          // 是否过去;
          if ((new Date().getTime() - data.startTime) / 1000 > data.expire) {
            return null;
          }
        }
        return data.data;
      }
    } catch (e) {
      console.log('获取storage数据失败');
    }
    return null;
  }

  static clear() {
    try {
      wx.clearStorageSync();
    } catch (e) {
      // Do something when catch error
    }
  }

  static remove(key) {
    try {
      wx.removeStorageSync(preKey + key);
    } catch (e) {
    }
  }
  static haskey(key) {
    try {
      let temp = wx.getStorageSync(preKey + key);
      return temp !== null;
    } catch (e) {
      console.log('获取storage数据失败');
    }
    return false;
  }
}
