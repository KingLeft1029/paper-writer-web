<template>
    <div class="container  mt41">
        <div class="forums-detail-box">
            <span class="detail-name">{{ info.name }}</span>
            <div class="user flex align-center">
                <span>3 apr </span>
                <div class="col-line mlr"></div>
                <div class="flex align-center mr15">
                    <img src="../../assets/course/img.png" alt="">
                    <span>Zhang User</span>
                </div>
                <btn btnText="Follow" btnType="9"></btn>

            </div>
            <div class="flex align-center justify-between mt15">
                <div class="text-grey">
                    Tags： A、Label B、Labe
                </div>
                <IconsUserNum></IconsUserNum>

            </div>
            <div class="border-dotted mt15"></div>
            <div class="mt15 text-grey" v-html="info.content"> </div>
            <div class="flex flex-direction align-center justify-center mt41 inkjet-btn">
                <!-- 打赏墨水 -->
                <btn btnText="Inkjet" btnType="5" @click.native="inkject"></btn>
                <span>Nice Point! Inkjet to the author!</span>
            </div>
            <IconBorderBtn></IconBorderBtn>

        </div>
        <div class="forums-detail-box">
            <Title title="Comments" />
            <div class="mt20">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Welcome to leave a comment"
                    v-model="textarea2">
                </el-input>

            </div>
            <div class="flex justify-end mt20">
                <btn btnText="Comments" btnType="6"></btn>

            </div>
            <div class="flex justify-center text-grey mt20">No comments yet, waiting for you to leave a discussion!（to
                discuss）</div>
        </div>
        <!-- 弹窗组件 -->
        <PopUp title="Inkjet to the Author" ref="pop" width="600">

            <div class="inkjet-grid">
                <div class="inkjet-grid-item" :class="{'active-ink':inkKey==inkIndex}" v-for="(inkItem,inkIndex) in inkList" @click="inkClick(inkItem,inkIndex)">
                    {{ inkItem }}
                </div>
            </div>
            <div class="flex justify-end mt33">
                <el-button type="primary" class="common-btn-deep" @click="inkSubmit">
                    Inkjet
                </el-button>
                <el-button class="common-btn-border" @click="cancel">
                    Cancel
                </el-button>
            </div>
        </PopUp>
    </div>
</template>
      
<script>
import PopUp from "@/components/PopUp"
import IconsUserNum from '../components/icons-user-num.vue'
import IconBorderBtn from '../components/icon-border-btn.vue'
import { detailApi ,inkApi } from "@/api/forums"
export default {
    components: {
        PopUp,
        IconsUserNum,
        IconBorderBtn
    },
    data() {
        return {
            textarea2: '',
    
            id: '',
            info: {},
            inkList:['200','300','400','500','600','800','1000','1200'],
            inkKey:0,
            inkReceivable:''
            
        };
    },
    created() {
        this.id = this.$route.query.id
        this.getInfo()
    },
    methods: {
        getInfo() {
            detailApi(this.id).then(res => {
                this.info = res.data
            })
        },
        // 1、打赏墨水，额度为固定值，系统写死，管理后台不可调配
        // 2、用户账户墨水购买，余额不足弹窗提示
        // 3、打赏成功，toast弹窗文本提示“恭喜您，打赏成功！花费XX墨水~”
        inkject() {
            this.$refs.pop.open()
        },
        inkClick(item,index){
            this.inkKey=index
            this.inkReceivable=item
        },
        inkSubmit(){
            let params={
                id:this.id,
                inkReceivable:this.inkReceivable
            }
            inkApi(params).then(res=>{
                this.$message.success("Posted successfully.");
                this.cancel()
            })
        },
        cancel(){
        this.$refs.pop.closest()
            this.inkReceivable=''
        }
    }
};
</script>
      
<style lang="scss" scoped>
.forums-detail-box {
    // width: 100%;
    // height: 908px;
    border-radius: 6px;
    border: 1px solid rgba(151, 151, 151, 0.18);
    padding: 20px;
    margin-bottom: 28px;

    .detail-name {
        font-size: 16px;
        font-weight: 500;
        color: #3E454E;
        line-height: 22px;
    }

    .user {
        margin-top: 10px;

        img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;

        }

        .mlr {
            margin: 0 13px;
        }
    }

    .icons {
        line-height: 24px;
        margin-top: 10px;
        color: #999999;
        font-size: 12px;

        img {
            vertical-align: middle;
            margin-top: -3px;
            margin-right: 4px;
        }


    }

    .border-dotted {
        height: 1px;
        width: 100%;
        border-top: 1px dotted rgba(151, 151, 151, 0.18);
    }

    .inkjet-btn {

        span {
            font-size: 12px;
            color: #FF8F00;
            line-height: 18px;

            margin-top: 11px;
        }

        img {
            vertical-align: middle;
            margin-top: -2px;
        }
    }


}

.inkjet-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 18px;
    padding: 0 83px;

    .inkjet-grid-item {
        // width: 88px;
        height: 40px;
        background: rgba(216, 216, 216, 0.2);
        border-radius: 4px;
        text-align: center;
        line-height: 40px;
        font-weight: 500;
        color: #000000;
        border: 2px solid transparent;
        cursor: pointer;

        &:hover {
            color: #DC0025;
            border-image: linear-gradient(180deg, rgba(248, 115, 8, 1), rgba(221, 2, 37, 1)) 2 2;
        }
    }
    .active-ink{
        color: #DC0025;
            border-image: linear-gradient(180deg, rgba(248, 115, 8, 1), rgba(221, 2, 37, 1)) 2 2;
    }
}
</style>
      