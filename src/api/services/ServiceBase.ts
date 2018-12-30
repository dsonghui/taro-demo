/**
 * 次模块 禁止引入其他 继承此模块的文件( 其他的 Service ) 否则会引起循环引用
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/4/24
 */
import ApiService from '../apiService'

class ServiceBase {
  api = ApiService;
  skipRefreshTokenUrl = [
    '/api/refreshToken/'
  ]

  static instance: any = null;

  /**
   * 单例调用,暂不支持构造函数需参数的形式.
   * @warning 禁止调用 ServiceBase.getInstance() 会影响子类的 原型链 不再实例化子类的实例;
   */
  static getInstance<T>(): T {
    if (this.instance === null) {
      this.instance = new this();
    }
    return this.instance;
  }

  request<T>(url = '', data: any = '', option: any = {}): Promise<T> {
    option.url = url;
    option.data = data;
    let method = option.method || 'POST';
    return this.api.baseOptions<T>(option, method).then((response: any) => {
      // 取出后台返回的最后值;
      return response.data;
    }).catch(err => {
      console.log(err);
      throw err;
    })
  }


  refreshToken() {
    return this.request('/api/refreshToken', {}, 'post').then(token => {
      if (token) {
      }
      return token;
    });
  }
}

export default ServiceBase
