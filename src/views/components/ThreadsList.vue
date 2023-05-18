<template>
    <div class="threads-box">
        <div class="threads-item mb20 flex align-center" v-for="x in 5">
            <div class="left">
                <div class="name text-cut2 text-cut" title="">
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
                <div class="icons flex align-center">
                    <div class="mr20" v-for="item in iconList" :key="item">
                        <img :src="item.src" alt="">
                        <span>{{ item.label }}</span>
                    </div>
                </div>
            </div>

            <div class="right ml20">
                <img src="../../assets/course/img.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            iconList: [{ src: require('../../assets/course/icon1.png'), label: '2000' },
            { src: require('../../assets/course/icon2.png'), label: '2000' },
            { src: require('../../assets/course/icon3.png'), label: '1.68k' },
            { src: require('../../assets/course/icon4.png'), label: '2000' },
            { src: require('../../assets/course/icon5.png'), label: '2000' },
           
            ]
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

        .icons{
            line-height: 24px;
            margin-top: 10px;
            color: #999999;
            font-size: 12px;
          
            img{
               vertical-align: middle;
               margin-top: -3px;
               margin-right: 4px;
            }
            span{
                &:hover{
                color: #dc0025;
            }
            }
        }

        .right{
           img{
            max-width: 130px;
            height: 142px;
           }

        }
    }
}</style>
