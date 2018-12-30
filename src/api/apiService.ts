import Taro from '@tarojs/taro'
import { baseUrl } from '../config'
import { logError } from '../helpers'

const token = ''
type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

export default {
  baseOptions<T>(params, method: Method = 'GET'): Promise<T> {
    let { url, data } = params
    // let token = getApp().globalData.token
    // if (!token) login()
    console.log('params', params)
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: baseUrl + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token },
      success(res) {
        // 错误处理
        return res.data;
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    return <any>Taro.request(option)
  },
  get(url, data = '', option: any = {}) {
    option = option || {};
    option.url = url;
    option.data = data;
    return this.baseOptions({ url, data })
  },
  post: function (url, data, option: any = {}) {
    option = option || {};
    option.url = url;
    option.data = data;
    return this.baseOptions(option, 'POST')
  }
}
