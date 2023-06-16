// // 用于向 IMKit SDK 提供用户信息、群组信息等数据
// import {custom_service} from './custom_service.js'
// // 接入时需要将 '请更换您应用的 appkey' 替换为您的应用的 appkey
// let libOption = {appkey: '请更换您应用的 appkey'}
// let custom_service = {
//   // 获取用户详情
//   getUserProfile: (userId) => {
//     // 需要通过 userId 向应用服务器获取 user 信息，拼接成如下格式
//     // 注意：userInfo 的 Key 不可修改
//     const userInfo = {
//       id: userId,
//       name: "用户姓名",
//       portraitUri: "用户头像 URI",
//     };
//     return Promise.resolve(userInfo);
//   },

//   // 获取会话详情
//   getConversationProfile: (conversations) => {
//     // SDK 返回 conversations 为会话列表，可根据返回的 conversations 向应用服务器请求会话详情信息。
//     // 请根据具体 conversation 信息匹配 name、portraitUri 拼接到 conversationInfo 信息中。
//     const promises = [];
//     conversations.forEach((conversation) => {
//       const converationInfo = {
//         ...conversation,
//         name: `会话名称`,
//         portraitUri: `会话头像 URI`,
//       };
//       if(conversation == RongIMLib.ConversationType.GROUP){
//         conversationInfo.memberCount = 0; // memberCount 为群成员数量需要业务侧修改
//       }
//       // 只需要传递 conversationInfo 信息，整体返回的数据格式不可改变
//       promises.push(
//         Promise.resolve(conversationInfo)
//       );
//     });
//     return Promise.all(promises);
//   },

//   // 获取群组详情
//   getGroupMembers: (conversation) => {
//     // 通过 conversation 的 targetid 获取群组成员信息
//     // groupMembers 为群组成员 list，需要构建成对象数组。
//     // 特别注意：如果传递的群组成员信息不准确会影响 @ 信息的发送和群组成员昵称的展示
//     const groupMembers = [
//       {
//         id: `【成员】成员 ID`,
//         name: `【成员】name`,
//         portraitUri: `【成员】头像 URI`,
//       },
//     ];
//     return Promise.resolve();
//   },
// };

// // 应用初始化以获取 RongIMLib 实例对象，请务必保证此过程只被执行一次
// RongIMLib.init(libOption);

// // 初始化
// imkit.init({
//   appkey: 'x18ywvqfxz5yc'
//   service: custom_service,
//   libOption: libOption,
// });

// 用于向 IMKit SDK 提供用户信息、群组信息等数据
import {custom_service} from './custom_service.js'

// IMKit 初始化参数 appkey，从开发者后台获取
const yourAppKey = "x18ywvqfxz5yc";

// IMLib 的初始化配置，appkey 为必填参数，其他字段参见 IInitOption
let libOption = {appkey: yourAppKey};

// 获取 RongIMLib 实例对象，请务必保证此过程只被执行一次
RongIMLib.init(libOption);

imkit.init({
  appkey: yourAppKey,
  service: custom_service,
  libOption: libOption
});