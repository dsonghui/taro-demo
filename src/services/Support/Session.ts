/**
 *
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/4/25
 */
import MyGenerate from "@/helpers/MyGenerate";
import WxStorage from "@/helpers/WxStorage";


export class JCSession {
  sessionId: string = '';
  SessionCackeKey = 'JC-SessionCackeKey';
  getSession() {
    if(this.sessionId) return this.sessionId;
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
