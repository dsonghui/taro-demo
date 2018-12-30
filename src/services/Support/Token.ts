/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/4/25
 */
import WxStorage from "@/helpers/WxStorage";

export class JCToken {
  token: string = '';
  TokenCackeKey = 'JC-TokenCackeKey';
  getToken() {
    if (this.token) return this.token;
    return WxStorage.get(this.TokenCackeKey);
  }
  setToken(token) {
    return WxStorage.set(this.TokenCackeKey, token);
  }
}

export default new JCToken();
