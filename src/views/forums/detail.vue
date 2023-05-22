<template>
    <div class="container  mt41">
        <div class="forums-detail-box">
            <span class="detail-name">Course Name Course name course name</span>
            <div class="user flex align-center">
                <span>3 apr </span>
                <div class="col-line mlr"></div>
                <div class="flex align-center mr15">
                    <img src="../../assets/course/img.png" alt="">
                    <span>Zhang User</span>
                </div>
                <el-button type="primary" class="common-btn-edit" disabled>Follow</el-button>
            </div>
            <div class="flex align-center justify-between mt15">
                <div class="text-grey">
                    Tags： A、Label B、Labe
                </div>
                <div class="icons flex align-center">
                    <div class="mr20" v-for="item in iconList" :key="item">
                        <img :src="item.src" alt="">
                        <span>{{ item.label }}</span>
                    </div>
                </div>
            </div>
            <div class="border-dotted mt15"></div>
            <div class="mt15 text-grey" v-html="value"> </div>
            <div class="flex flex-direction align-center justify-center mt41 inkjet-btn">
                <el-button type="primary">Inkjet</el-button>
                <span>Nice Point! Inkjet to the author!</span>
            </div>
            <div class="flex align-center justify-end inkjet-btn">
                <el-button type="primary">
                    <img src="@/assets/icon/icon-star.png" alt="">
                    Likes
                </el-button>
                <el-button type="primary">
                    <img src="@/assets/icon/icon-route.png" alt="">
                    Collects
                </el-button>
                <el-button type="primary">
                    <img src="@/assets/icon/icon-love.png" alt="">
                    Share
                </el-button>
            </div>
        </div>
        <div class="forums-detail-box">
            <Title title="Comments" />
            <div class="mt20">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="Welcome to leave a comment"
                    v-model="textarea2">
                </el-input>

            </div>
           <div class="flex justify-end mt20">
            <el-button type="primary" class="btn-comments ">Comments</el-button>
           </div>
           <div class="flex justify-center text-grey mt20">No comments yet, waiting for you to leave a discussion!（to discuss）</div>
        </div>
    </div>
</template>
      
<script>

export default {
    components: {

    },
    data() {
        return {
            iconList: [{ src: require('@/assets/course/icon1.png'), label: '2000' },
            { src: require('@/assets/course/icon2.png'), label: '2000' },
            { src: require('@/assets/course/icon3.png'), label: '1.68k' },
            { src: require('@/assets/course/icon4.png'), label: '2000' },
            { src: require('@/assets/course/icon5.png'), label: '2000' },

            ],
            value: '21dsfsdfsdfd'
        };
    },
    methods: {

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
        .el-button {
            width: 78px;
            height: 26px;
            background: rgba(255, 143, 0, 0.08);
            border-radius: 4px;
            border: 1px solid rgba(224, 14, 34, 0.8);
            // border-image: linear-gradient(90deg, rgba(248, 116, 7,  0.8), rgba(224, 14, 34,  0.8)) 1 1;
            font-size: 13px;
            color: #FF8F00;
            display: flex;
            align-items: center;
            justify-content: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
        }

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

    .btn-comments {
        width: 128px;
        height: 36px;
        background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        border-radius: 4px;
        font-size: 16px;
        color: #FFFFFF;
     display: flex;
     justify-content: center;
     align-items: center;
    }
}
</style>
      