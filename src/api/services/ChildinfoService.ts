/**
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/04/26
 */
import ServiceBase from "./ServiceBase";

const urlbase = '/B2C/B2C_Childinfo';

export class ChildinfoService extends ServiceBase {
  /**
   * 获取小孩信息
   */
  GetChild(childId: number) {
    return this.request<ChildInfoModel>(urlbase + '/GetChild', { childId });
  }
  /**
   * 获取帐号下所有小孩信息
   */
  GetChildsForAccount() {
    return this.request<ChildInfoModel[]>(urlbase + '/GetChildsForAccount');
  }
  /**
   * 保存小孩信息
   */
  SaveChildInfo(model: ChildInfoModel) {
    return this.request<number>(urlbase + '/SaveChildInfo', { model });
  }
  /**
   * 删除小孩信息
   */
  DeleteChild(childId: number) {
    return this.request<boolean>(urlbase + '/DeleteChild', { childId });
  }
  /**
   * 绑定医院卡
   */
  BindingHospitalCard(entity: child_hospital_card) {
    return this.request<number>(urlbase + '/BindingHospitalCard', { entity });
  }
  /**
   * 删除诊疗卡
   */
  DeleteHospitalCard(autoId: number) {
    return this.request<boolean>(urlbase + '/DeleteHospitalCard', { autoId });
  }
}

export class ChildInfoModel {

  AutoId: number = 0;
  /**
   * 宝宝姓名
   */
  Name: string = '';
  /**
   * 出生日期
   */
  Birthday: string | null = null;
  /**
   * 宝宝性别1.男，2.女
   */
  Sex: number | null = null;
  /**
   * 关系
   */
  RelationShip: number | null = null;
  /**
   * 出生证号
   */
  BirthNum: string = '';
  /**
   * 身份证号
   */
  Identity: string = '';
  /**
   * 手册Id
   */
  BookId: number | null = null;
}

export class child_hospital_card {

  AutoId: number = 0;
  /**
   * 儿童ID
   */
  ChildId: number = 0;
  /**
   * 医院ID
   */
  HospitalId: number = 0;
  /**
   * 卡类型
   */
  CardType: number = 0;
  /**
   * 卡号
   */
  CardCode: string = '';
  /**
   * 是否有效
   */
  IsValid: boolean = false;
  /**
   * 无效原因
   */
  NoValidReason: string = '';
}


