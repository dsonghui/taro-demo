/**
 * Author: david.deng<david.deng@jcinfotech.com>
 * Date: 2018/05/04
 */
import ServiceBase from "./ServiceBase";

const urlbase = '/B2C/B2C_Gb_Abc';

export class AbcService extends ServiceBase {

  GetConclusion() {
    return this.request<AbcConclusion[]>(urlbase + '/GetConclusion');
  }

  GetAbcItem() {
    return this.request<AbcItem[]>(urlbase + '/GetAbcItem');
  }

  GetAllRecord(basicinfoId: number) {
    return this.request<AbcResult[]>(urlbase + '/GetAllRecord', { basicinfoId });
  }

  GetRecordByRecordId(recordId: number) {
    return this.request<AbcResult>(urlbase + '/GetRecordByRecordId', { recordId });
  }

  SaveRecord(record: AbcResult) {
    return this.request<number>(urlbase + '/SaveRecord', { record });
  }

  DelRecord(recordId: number) {
    return this.request<boolean>(urlbase + '/DelRecord', { recordId });
  }
}

export class AbcConclusion {

  Code: number = 0;

  Content: string = '';

  BeginScore: number = 0;

  EndScore: number = 0;
}

export class AbcItem {

  AutoId: number = 0;

  Name: string = '';

  Type: number | null = null;

  Score: number | null = null;

  Orderby: number | null = null;

  Answer: AbcAnswer = new AbcAnswer();
}

export class AbcAnswer {

  DictId: number | null = null;

  AbcBaseId: number | null = null;

  Answer: boolean | null = null;
}

export class AbcResult {

  AutoId: number = 0;

  ChildId: number = 0;

  TestDate: string = '';

  Preparer: string = '';

  Relationship: number | null = null;

  FeelScore: number | null = null;

  ContactScore: number | null = null;

  SportScore: number | null = null;

  LanguageScore: number | null = null;

  SelfCareScore: number | null = null;

  IssuesDetail: string = '';

  Conclusion: number | null = null;

  CreateTime: string | null = null;

  LastUpdateTime: string | null = null;

  AnswerLst: AbcAnswer[] = [];
}
