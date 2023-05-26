<template>
    <div class="tab-content-box mt20">
        <TabChange @changeTab="changeTab" :navList="navList" width="396"></TabChange>
        <!-- 课程说明 -->
        <div v-if="navKey == 0" v-html="value"></div>
        <!-- 课程章节 -->
        <div v-if="navKey == 1" class="tab-info-box mb20">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <div slot="title" class="tab-info-top flex  align-center justify-between">
                        <span>
                            01. Submit chapter content when publishing
                        </span>
                        <div class="flex align-center justify-between">
                            <div class="check-btn">Check Assignments</div>
                            <img src="@/assets/course/down-icon.png" alt="">
                        </div>
                    </div>
                    <div class="item-box">
                        <div class="tab-info-item" v-for="x in 3">
                            <div class="flex align-center justify-between">
                                <span>1. Submit video when publishing</span>
                                <img src="@/assets/course/play-icon.png" alt="">
                            </div>
                            <div class="info-word">66min</div>
                        </div>

                    </div>

                 
                </el-collapse-item>
             
                <el-collapse-item name="2" >
                    <div slot="title" class="tab-info-top flex  align-center justify-between">
                        <span>
                            01. Submit chapter content when publishing
                        </span>
                        <div class="flex align-center justify-between" >
                            <div class="check-btn">Check Assignments</div>
                            <img src="@/assets/course/down-icon.png" alt="">
                        </div>
                    </div>
                    <div class="item-box">
                        <div class="tab-info-item" >
                            <div class="flex align-center justify-between">
                                <span>1. Submit video when publishing</span>
                                <img src="@/assets/course/play-icon.png" alt="">
                            </div>
                            <div class="info-word">66min</div>
                        </div>

                    </div>
                </el-collapse-item>
            </el-collapse>
         
        </div>
        <!-- 课程评论 -->
        <div v-if="navKey == 2" class="tab-info-box mb20 padding20">
            <Title title="Comments" />
            <el-input class="mt41" type="textarea" :rows="2" placeholder="Welcome to leave a comment" v-model="textarea">
            </el-input>

            <div class="flex justify-end mt20">
                <el-button type="primary" class="btn-comments ">Comments</el-button>
                <!-- <div class="flex justify-center text-grey mt20">No comments yet, waiting for you to leave a discussion!（to
                discuss）</div> -->
            </div>
            <div class="comments-box">
                <div v-for="x in 6" class="comments-item">
                    <div class="item-user-box">
                        <div class="user-img"></div>
                        <div class="user-name">Zhang User</div>
                        <span class="ml15">2023-04-22</span>
                    </div>
                    <div class="comments-des text-cut text-cut2 mt10">
                        Article descriptionArticle descriptionArticle descriptionArticle descriptionArticle descriptiona
                        Article descriptionArticle descriptionArticle Article descriptionArticle descriptionArticle
                        descriptionArticle descriptionArticle descriptiona Article descriptionArticle descriptionArticle
                    </div>
                    <div class="comments-btn mt15">
                        <!-- Cancel Reply -->
                        Comments
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
      
<script>
import TabChange from "../components/TabChange.vue";
import Title from "@/components/Title";
export default {
    components: {
        TabChange,
        Title
    },
    data() {
        return {
            navList: ["What you'll learn", "Course content", "Reviews"],
            value: 'rticle descriptionArticle descriptionArticle descrip',
            navKey: 0,
            activeNames: ['1']
        };
    },
    methods: {
        changeTab(num) {
            this.navKey = num
        },
        handleChange(val) {
            console.log(val);
        }
    }
};
</script>
      
<style lang="scss" scoped>
.tab-content-box {
    position: relative;
    border-radius: 6px 6px 0px 0px;
    border: 1px solid #e9e7e7;
    padding: 20px;
    padding-top: 60px;
    min-height: 464px;

    .tab-info-box {
        // border: 1px solid #e9e7e7;
        padding-bottom: 20px;

        .tab-info-top {
            width: 100%;
            height: 48px;
            background-color: #F6F6F6;
            padding: 0 20px;

            span {
                color: #3E454E;
                font-size: 16px;
            }

            .check-btn {
                width: 148px;
                height: 20px;
                background: rgba(238, 77, 17, 0.2);
                border-radius: 3px;
                font-size: 14px;
                color: #61687C;
                line-height: 20px;
                text-align: center;
                margin-right: 41px;
                border: 1px solid rgba(151, 151, 151, 0.54);
            }
        }

        .item-box {
            padding: 0 20px;
        }

        .tab-info-item {
            padding: 20px 0;
            border-bottom: 1px solid #e9e7e7;
            color: #3E454E;

            .info-word {
                margin-top: 6px;
                text-indent: 14px;
                color: #999999;
            }
        }

        .btn-comments {
            width: 128px;
            height: 36px;
            // background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
            border-radius: 4px;
            font-size: 16px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .comments-box {

        .comments-item {
            border-bottom: 1px solid rgba(151, 151, 151, 0.16);
            padding: 20px 0;
            
        }

        .comments-des {
            color: #7E7E7E;
            line-height: 24px;
        }

        .comments-btn {
            font-size: 13px;
            color: #FF8F00;
            line-height: 18px;
            cursor: pointer;
            text-align: right;

            &:hover {
                color: #DC0025;
            }
        }
    }

    .item-user-box {
        display: flex;
        font-size: 14px;
        line-height: 24px;
        margin-top: 5px;
        align-items: center;

        .user-img {
            width: 20px;
            height: 20px;
            background: #d8d8d8;
            border-radius: 10px;
        }

        .user-name {
            font-weight: 400;
            color: #333333;
            margin-left: 10px;
        }

        span {
            color: #B3B3B3;
        }
    }

    ::v-deep .el-icon-arrow-right:before {
        content: '';
        display: none;
    }

    ::v-deep .el-collapse-item__arrow,
    ::v-deep .el-icon-arrow-right {
        display: none;
    }
    ::v-deep  .el-collapse-item__wrap{
        border: none;
    }
    ::v-deep .el-collapse{
        border-bottom: none;
    }
    ::v-deep .el-collapse-item{
        border:1px solid #e9e7e7 ;
        margin-bottom: 20px;
    }

}
</style>
      