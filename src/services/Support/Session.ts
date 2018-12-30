/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/4/25
 */
import MyGenerate from "src/helpers/MyGenerate";
import WxStorage from "src/helpers/WxStorage";


export class JCSession {
  SessionCackeKey = 'JC-SessionCackeKey';
  getSession() {
    return WxStorage.get(this.SessionCackeKey);
  }
  setSession(sessionId) {
    return WxStorage.set(this.SessionCackeKey, sessionId);
  }
  generateSessionId(force = false) {
    let sessionId;
    if (!force) sessionId = this.getSession();
    console.log('缓存的 session:' + sessionId);
    if (!sessionId) sessionId = MyGenerate.randomStr(64);
    this.setSession(sessionId);
    return sessionId;
  }
}

export default new JCSession();
