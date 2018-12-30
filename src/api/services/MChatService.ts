/**
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/04/26
 */
import ServiceBase from "./ServiceBase";

const urlbase = '/B2C/B2C_Gb_MChat';

export class MChatService extends ServiceBase {

  GetMChatItem() {
    return this.request<MChatItemEm[]>(urlbase + '/GetMChatItem');
  }

  GetAllRecord(childId: number) {
    return this.request<MChatResultEm[]>(urlbase + '/GetAllRecord', { childId });
  }

  GetRecordByRecordId(recordId: number) {
    return this.request<MChatResultEm>(urlbase + '/GetRecordByRecordId', { recordId });
  }

  SaveRecord(model: MChatResultEm) {
    return this.request<number>(urlbase + '/SaveRecord', { model });
  }

  DelRecord(recordId: number) {
    return this.request<boolean>(urlbase + '/DelRecord', { recordId });
  }
}

export class MChatItemEm {

  AutoId: number = 0;

  Name: string = '';

  Orderby: number = 0;
}

export class MChatResultEm {

  AutoId: number = 0;
  /**
   * 儿童ID
   */
  ChildId: number = 0;
  /**
   * 测试日期
   */
  TestDate: string = '';
  /**
   * 填表人
   */
  Preparer: string = '';
  /**
   * 填表人关系
   */
  Relationship: number = 0;
  /**
   * 总分
   */
  Score: number = 0;
  /**
   * 结论
   */
  Conclusion: number = 0;

  AnswerLst: MChatAnswerEm[] = [];
}

export class MChatAnswerEm {

  AutoId: number = 0;
  /**
   * 字典id
   */
  DictId: number = 0;
  /**
   * baseid
   */
  BaseId: number = 0;
  /**
   * 得分
   */
  Answer: number = 0;
}


