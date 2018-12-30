// /**
//  * WechatJssdk
//  * Author: david.deng<david.deng@jcinfotech.com>
//  * Date: 2018/7/6
//  */
//
// import { B2C_WeixinMpService } from "api/services/WeixinMpService";
// import JCConfig from "../../config";
//
// const jsApiList = [
//     'onMenuShareTimeline',
//     'onMenuShareAppMessage',
//     'onMenuShareQQ',
//     'onMenuShareQQ',
//     'onVoiceRecordEnd',
//     'chooseImage',
//     'previewImage',
//     'uploadImage',
//     'downloadImage',
//     'getLocation',
//     'openLocation',
// ];
//
// export class WechatJssdkSupport {
//     WechatJssdkConfigPromise = null;
//
//     appId: string | null = '';
//
//     WechatJssdkIsReady(): Promise<any> {
//         return this.SetWechatJssdkSupport();
//     }
//
//     /**
//      * 微信分享配置
//      */
//     SetWechatShareConfig() {
//     }
//
//     /**
//      * 配置 JSSsdk
//      */
//     SetWechatJssdkSupport(url?) {
//         let _url = url || window.location.href.split('#').shift();
//         if (!this.WechatJssdkConfigPromise) {
//             this.WechatJssdkConfigPromise = B2C_WeixinMpService.getInstance<B2C_WeixinMpService>().GetSignature(_url).then(response => {
//                 this.appId = response.AppId;
//                 return new Promise(function (resolve, reject) {
//                     if (window['wx']) {
//                         wx.config({
//                             debug: false,
//                             appId: response.AppId,
//                             timestamp: Number(response.Timestamp),
//                             nonceStr: response.NonceStr,
//                             signature: response.Signature,
//                             jsApiList: jsApiList
//                         });
//                         wx.ready(function () {
//                             resolve();
//                         });
//                     } else {
//                         reject();
//                         throw new Error(' 未微信浏览器 不能调用jssdk ');
//                     }
//                 })
//             })
//         }
//         return this.WechatJssdkConfigPromise;
//     }
// }
//
// export const WechatJssdk = new WechatJssdkSupport();
//
//
// export class WxImage {
//     localId: string | null = null;
//     serverId: string | null = null;
//     guid: string | null = null;
//
//     get url() {
//         return this.guid ? JCConfig.ImageServerUrl + '/CH/Image/GetImageFile?sessionid=123&imageId=' + this.guid : this.localId;
//     }
// }
//
// export class WxUploadImage extends WxImage {
//     status: number = 1; //1 已上传, 0 待上传;,-1 上传失败
//     progress: number = 0; //上传进度
//     get NeedUpload() {
//         return this.localId && !this.serverId;
//     }
//
// }
