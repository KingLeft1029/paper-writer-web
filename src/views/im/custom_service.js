import * as RongIMLib from '@rongcloud/imlib-next'
import { defineCustomElements, imkit } from '@rongcloud/imkit'
export default {
    // 获取用户详情
    getUserProfile: (userId) => {
      // 需要通过 userId 向应用服务器获取 user 信息，拼接成如下格式
      // 注意：userInfo 的 Key 不可修改
      const userInfo = {
        id: 'yVdA3gXvP',
        name: "用户姓名",
        portraitUri: "用户头像 URI",
      };
      return Promise.resolve(userInfo);
    },
  
    // 获取会话详情
    getConversationProfile: (conversations) => {
      // SDK 返回 conversations 为会话列表，可根据返回的 conversations 向应用服务器请求会话详情信息。
      // 请根据具体 conversation 信息匹配 name、portraitUri 拼接到 conversationInfo 信息中。
  
      // 方式 1 为了减少请求次数，可以批量请求（推荐），需服务端支持批量请求接口
      return new Promise((resolve) => {
        // 请将 mockBatchFetchGroupInfo 方法替换成真实请求方法
        mockBatchFetchGroupInfo(conversations).then(res => {
          const list = conversations.map(item => {
            // 代码示例，可根据真实接口返回的数据处理
            const info = res.find(con => con.targetId === item.targetId)
  
            return {
              ...item,
              name: info.name,
              portraitUri: info.portraitUri,
              // 如果是群组会话，则需要群组成员数量
              memberCount: con.conversationType === RongIMLib.ConversationType.GROUP ? info.memberCount : 0
            }
          })
          resolve(list)
        })
      })
  
    //   // 方式 2 可以通过 forEach 方式遍历请求
    //   const promises = [];
    //   conversations.forEach((conversation) => {
    //     promises.push(new Promise(resolve) => {
    //       // 请将 mockFetchGroupInfo 方法替换成真实请求方法
    //       mockFetchGroupInfo(conversation).then((res) => {
    //         resolve({
    //           ...conversation,
    //           name: res.name,
    //           portraitUri: res.portraitUri,
    //           // 如果是群组会话，则需要群组成员数量
    //           memberCount: conversation.conversationType === RongIMLib.ConversationType.GROUP ? res.memberCount : 0
    //         })
    //       })
    //     })
    //   });
    //   return Promise.all(promises);
    },
  
    // 获取群组详情
    getGroupMembers: (conversation) => {
      // 通过 conversation 的 targetid 获取群组成员信息
      // groupMembers 为群组成员 list，需要构建成对象数组。
      // 特别注意：如果传递的群组成员信息不准确会影响 @ 信息的发送和群组成员昵称的展示
      const groupMembers = [
        {
          id: `【成员】成员 ID`,
          name: `【成员】name`,
          portraitUri: `【成员】头像 URI`,
        },
      ];
      return Promise.resolve(groupMembers);
    },
  };
  