
<template>
    <div class='chat-box'>
        <div class="chat-top"></div>
        <div class="chat-content">
            <img class="chat-avatar" src="@/assets/icon/logo.png" alt="">
            <TabChange @changeTab="changeTab" navType="1" :navList="navList" width="236"></TabChange>
        </div>
        <!-- message -->
        <div class="chat-list" v-if="navKey == 0">
            <el-scrollbar class="chat-scroll">
                <div class="chat-list-item flex justify-between align-center"
                    :class="{ 'active-list-item': messageKey == index }" v-for="(item, index) in messageList"
                    @click="messageClick(item, index)">
                    <div class="flex">
                        <img class="chat-avatar" src="../../assets/course/img.png" alt="">
                        <div class="flex flex-direction justify-between">
                            <span class="chat-name">王五</span>
                            <span class="chat-word">nihaoya.你在干什么呢，do you douyouasdasdasdasdasd</span>
                        </div>
                    </div>
                    <el-popover placement="right" trigger="click" :visible-arrow="false">
                        <div class="popover-box">
                            <div>Home Page</div>
                            <div @click="report">Report</div>
                        </div>
                        <img class="pointer" slot="reference" src="@/assets/icon/dian.png" alt="">
                    </el-popover>


                </div>
                <MsgDialog ref="msg"></MsgDialog>
            </el-scrollbar>
        </div>
        <!-- contacts -->
        <div class="contacts-box">
            <div class="search-box">
                <el-input style="width:240px;" v-model="search" placeholder="search" />
                <i class="el-icon-search"></i>
            </div>
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="flex">
                            <span>Contacts</span>
                        </div>
                    </template>
                    <el-scrollbar class="chat-scroll">
                        <div class="chat-list-item flex justify-between align-center" v-for="x in 6">
                            <div class="flex">
                                <img class="chat-avatar" src="../../assets/course/img.png" alt="">
                                <div class="flex flex-direction justify-between">
                                    <span class="chat-name">王五</span>
                                </div>
                            </div>
                            <el-popover placement="right" trigger="click" :visible-arrow="false">
                                <div class="popover-box">
                                    <div>Home Page</div>
                                    <div @click="report">Report</div>
                                    <div @click="report">Group Management</div>
                                </div>
                                <img class="pointer" slot="reference" src="@/assets/icon/dian.png" alt="">
                            </el-popover>

                        </div>
                    </el-scrollbar>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <div class="flex">
                            <span>Groups</span>
                        </div>
                    </template>
                    <el-scrollbar class="chat-scroll">
                        <div class="chat-list-item flex justify-between align-center" v-for="x in 6">
                            <div class="flex">
                                <img class="chat-avatar" src="../../assets/course/img.png" alt="">
                                <div class="flex flex-direction justify-between">
                                    <span class="chat-name">王五</span>
                                </div>
                            </div>
                            <el-popover placement="right" trigger="click" :visible-arrow="false">
                                <div class="popover-box">
                                    <div>Home Page</div>
                                    <div @click="report">Report</div>
                                    <div @click="report">Group Management</div>
                                </div>
                                <img class="pointer" slot="reference" src="@/assets/icon/dian.png" alt="">
                            </el-popover>

                        </div>
                    </el-scrollbar>
                </el-collapse-item>
            </el-collapse>
        </div>
        <ReportDialog ref="report"></ReportDialog>

    </div>
</template>

<script>
import TabChange from "../components/TabChange.vue";
//im举报
import ReportDialog from './report-dialog.vue'
import MsgDialog from './message-dialog.vue'
export default {
    name: '',
    components: { TabChange, ReportDialog, MsgDialog },
    data() {
        return {
            navList: ["Message", "Contacts"],
            navKey: 0,
            search: '',
            activeNames: ['1'],
            messageKey: null,
            messageList: [{}, {}, {}]
        };
    },
    computed: {},
    watch: {},
    methods: {
        changeTab(num) {

            this.navKey = num
        },
        report() {
            this.$refs.report.open()
        },
        messageClick(item, index) {
            this.messageKey = index
            this.$refs.msg.open()
        }
    },
    created() {
        localStorage.removeItem('navActive')
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入公共css类 */
.chat-box {
    width: 358px;
    box-shadow: 0px 6px 25px -4px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    margin-top: 20px;


    .chat-top {
        width: 358px;
        height: 87px;
        background-image: url('@/assets/course/msg.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .chat-content {
        position: relative;
        width: 280px;
        // padding:0 30px ;
        padding-left: 16px;

        height: 40px;
        margin: 0 auto;
        margin-top: 32px;
        // border-bottom: 2px solid #EFEFEF;

        .chat-avatar {
            width: 36px;
            height: 36px;
            position: absolute;
            left: -34px;
            border-radius: 50%;
        }

    }
}

.chat-scroll {
    height: 526px;
    margin-top: 20px;

    .chat-list {
        position: relative;
    }

    .chat-list-item {

        padding: 12px 9px;
        cursor: pointer;

        &:hover {
            background: #F5F5F5;
        }

        .chat-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-right: 12px;
        }

        .chat-name {
            font-size: 16px;
            color: #000000;
            line-height: 22px;
        }

        .chat-word {
            width: 188px;
            font-size: 12px;
            color: #999999;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .active-list-item {
        background: #F5F5F5;
    }
}

.chat-box {
    ::v-deep .el-popover {
        // width: 150px !important;
        // height: 70px !important;

    }

}

.popover-box {
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 75px;

    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.13);

    div {
        padding: 8px 0;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);

            font-size: 16px;
            color: #FFFFFF;
        }
    }

    div:nth-of-type(1) {
        border-bottom: 1px solid #dedede;
    }
}

.search-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;

    i {
        font-size: 20px;
        color: #999999;
        margin-left: 13px;
    }
}

.contacts-box {
    ::v-deep .el-collapse-item__header {
        width: 358px;
        height: 30px;
        background: #F7F7F7;
        color: #999999;
        font-size: 14px;
        padding: 0 9px;
    }
}</style>