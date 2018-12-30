/**
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2017/12/24
 */
import ServiceBase from "./ServiceBase";

const urlbase = '/B2C/B2C_WeixinMiniProgram';

export class WeixinMiniProgramService extends ServiceBase {
  /**
   * 基于微信小程序jscode登录系统
   */
  LoginByJsCode(jscode: string) {
    return this.request<number>(urlbase + '/LoginByJsCode', { jscode });
  }
  /**
   * 使用token登录系统
   */
  LoginByToken(token: string) {
    return this.request<number>(urlbase + '/LoginByToken', { token });
  }
  /**
   * 保存用户详细信息
   */
  SaveAccountDetail(model: AccountDetailModel) {
    return this.request<boolean>(urlbase + '/SaveAccountDetail', { model });
  }
  /**
   * 获取用户详细信息
   */
  GetAccountDetail() {
    return this.request<AccountDetailModel>(urlbase + '/GetAccountDetail');
  }
}

export class AccountDetailModel {
  /**
   * 电话号
   */
  Tel: string = '';
  /**
   * 身份证
   */
  IdentityCode: string = '';
  /**
   * 邮件地址
   */
  Email: string = '';
  /**
   * 用户名
   */
  UserName: string = '';
  /**
   * 性别
   */
  Sex: number | null = null;
  /**
   * 头像Url
   */
  HeadUrl: string = '';
  /**
   * 帐号ID
   */
  AccountId: number = 0;
  /**
   * 语言
   */
  Language: string = '';
}


