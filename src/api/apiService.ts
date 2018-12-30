import Taro from '@tarojs/taro'
import JCToken from "@/services/Support/Token";
import Session from "@/services/Support/Session";
import { baseUrl, AppUrls } from '../config'
import { logError } from '../helpers/index'

type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

interface ResponseData<T> {
  Status: number;
  Info: string;
  Data: T;
}

class ApiService {
  baseOptions<T>(params, method: Method = 'GET'): Promise<ResponseData<T>> {
    let { url, data } = params;
    let contentType = params.contentType || 'application/x-www-form-urlencoded';
    let token = JCToken.getToken() || '';
    let header = {
      'content-type': contentType,
      sessionId: Session.generateSessionId(),
    };
    if (token) {
      header['token'] = token;
    }
    if (!(/^https?/).test(url)) {
      url = baseUrl + url;
    }
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url,
      method,
      data,
      header,
      success(res) {
        return res;
      },
      error(e) {
        __handleErrorResponse({
          Info: '连接服务器失败。。'
        });
        logError('api', '请求接口出现问题', e)
      }
    }
    return Taro.request(option).then(response => {
      let { data, statusCode } = response;
      if (__isServerResponse(data)) {
        if (statusCode >= 200 && statusCode < 300) {
          return __handleResponse(data);
        }
        return __handleErrorResponse(data);
      }
      return __handleErrorResponse({
        Info: '连接服务器失败。'
      });
    });
  }
  get<T>(url, data = '', option: any = {}) {
    option = option || {};
    option.url = url;
    option.data = data;
    return this.baseOptions<T>({ url, data })
  }
  post<T>(url, data = '', option: any = {}) {
    option = option || {};
    option.url = url;
    option.data = data;
    return this.baseOptions<T>(option, 'POST')
  }

}

// 是否服务器的正常返回格式;
function __isServerResponse(response) {
  return response && response.hasOwnProperty('Status');
}

function __handleResponse(response) {
  let { Status, Data } = response;
  if (Status === 1 && Data !== undefined) return response;
  return __handleErrorResponse(response);
}

function __handleErrorResponse(response) {
  let { Status, Info } = response;
  // if (Status === -2) {
  //   return Taro.navigateTo({ url: AppUrls.login });
  // }
  Taro.showToast({
    icon: 'none',
    title: Info && Info.length < 60 ? Info : '服务器报错了。',
  });
  throw new Error(Info && Info.length < 60 ? Info : '服务器报错了。');
}


export default new ApiService;
