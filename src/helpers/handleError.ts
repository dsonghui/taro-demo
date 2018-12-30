/**
 * Created by david on 2017/2/15.
 */

export default class handleError {
    static ajaxError = (error) => {
        if (error && error.response) {
            // 请求出错了. 显示服务器返回的错误
            if (error.response.status >= 400 && error.response.data.message) {
                error.message = error.response.data.message;
            }
        }
        // 重新抛出错误;
        throw error;
    }
}
