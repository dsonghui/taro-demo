export class UserinfoEntity {
    AccountId: number = 0;
    UserName: string = '';
    IdentityCode: string = '';
    Tel: string = '';
    Avatar: string = '';
}

export class AccountEntity {
    AccountId: number = 0;
    IdentityCode: string = '';
    Tel: string = '';
    Email: string = '';
}

export class ProfileEntity {
    /**
     * 出生日期
     */
    Birthday: string | null = null;
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
     * 真实姓名
     */
    RealName: string = '';
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

