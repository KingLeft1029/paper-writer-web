<template>
    <div class="threads-box">
        <div class="threads-item mb20 flex align-center" v-for="x in 5">
            <div class="left">
                <div class="name text-cut2 text-cut" title="">
                    <div class="label" v-if="collectionFlag">Forums</div>
                    Post Name Post Name Post Name Post Name Post Name Post Name Post Name Post Name
                </div>
                <div class="word text-cut2 text-cut" title="">Article descriptionArticle descriptionArticle
                    descriptionArticle
                    descriptionArticle descriptiona Article descriptionArticle descriptionArticl</div>
                <div class="user flex align-center">
                    <span>3 apr </span>
                    <div class="col-line mlr"></div>
                    <div class="flex align-center">
                        <img src="../../assets/course/img.png" alt="">
                        <span>Zhang User</span>
                    </div>
                </div>
                <div class="btn">
                    <el-button type="primary" class="common-btn-keep" disabled> {{ btnText }}</el-button>
                </div>

            </div>

            <div class="right ml20">
                <img v-if="collectionFlag" class="free-paid-img" src="../../assets/course/free.png" alt="">
                <div v-else class="img-left-top">Finished</div>
                <!-- <img v-if="collectionFlag" class="free-paid-img" src="../../assets/course/paid.png" alt=""> -->
                <img :class="{ 'widthS': collectionFlag }" src="../../assets/course/img.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        collectionFlag: {
            type: Boolean,
            default: true
        },
        btnText: {
            type: String,
            default: 'Finished'
        }
    },
    components: {

    },
    data() {
        return {

        };
    },
};
</script>

<style lang="scss" scoped>
.threads-box {
    .threads-item {
        width: 100%;
        // height: 184px;
        background: #FFFFFF;
        border-radius: 6px;
        border: 1px solid rgba(151, 151, 151, 0.18);
        padding: 16px 20px;
        cursor: pointer;

        &:hover {
            border-color: #dc0025;
        }

        .name {
            font-size: 18px;
            font-weight: 500;
            color: #262B3A;
            line-height: 24px;
        }

        .word {

            font-size: 14px;
            font-weight: 400;
            color: #999999;
            line-height: 24px;
            margin-top: 10px;
            line-height: 24px;
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

        .btn {
            margin-top: 8px;

            // .el-button {
            //     width: 187px;
            //     height: 32px;
            //     line-height: 0px;
            //     background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
            // }

            .is-disabled {
                width: 187px;
                height: 32px;
                background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
                opacity: 0.5;
            }
        }



        .right {
            position: relative;

            img {
                width: 220px;
                height: 166px;
                object-fit: cover
            }

            .widthS {
                width: 162px;
                height: 168px;
            }

            .free-paid-img {
                position: absolute;
                top: -2px;
                left: 0;
                width: 48px;
                height: 26px;
            }

            .img-left-top {
                width: 80px;
                height: 18px;
                background: linear-gradient(44deg, #00CCFF 0%, #15CB87 69%, #15CB85 100%);
                border-radius: 9px;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
                position: absolute;
                top: 10px;
                left: 20px;
                text-align: center;
                line-height: 18px;
            }

        }

        .left {
            .label {
                width: 74px;
                height: 20px;
                border: 1px solid;
                border-image: linear-gradient(180deg, rgba(246, 107, 9, 1), rgba(223, 13, 33, 1)) 1 1;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
                text-align: center;
                background: linear-gradient(180deg, #F5670A 0%, #DC0025 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                border-radius: 6px;
                display: inline-block;
                margin-right: 20px;
            }
        }
    }
}
</style>
