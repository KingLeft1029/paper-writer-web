<template>
    <div class="edit-scroll">
        <!-- 文章页 的全部文章     -->
        <div class="scroll-box" v-if="routeName == 'forums'" :style="{ 'height': scrollHeight + 'px' }"
            v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <div class="threads-box">
                <router-link tag="div" :to="{ name: 'forumsdetail', query: { id: item.id }  }"
                    class="threads-item mb20 flex justify-between" v-for="item in list">
                    <div class="left flex flex-direction justify-between">
                        <div class="name text-cut2 text-cut " title="">
                            <!-- Declined  Done -->
                            <span class="status-label"
                                :class="{ 'status-yellow': true, 'status-red': false, 'status-blue': false }">
                                Under Review
                            </span>
                            {{ item.name }}
                        </div>
                        <div class="word text-cut2 text-cut" title="" v-html="item.content"> </div>
                        <div class="thread-label flex align-center">
                            <div class="thread-label-item" v-for="x in 6">
                                Label A
                            </div>
                        </div>
                        <div class="user flex align-center">
                            <span>3 apr </span>
                            <div class="col-line mlr"></div>
                            <div class="flex align-center">
                                <img src="../../assets/course/img.png" alt="">
                                <span>Zhang User</span>
                            </div>
                        </div>
                        <div class="icons flex align-center">
                            <div class="mr20" v-for="item in iconList" :key="item.id">
                                <img :src="item.src" alt="">
                                <span>{{ item.label }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right ml20">
                        <img src="@/assets/person/forum-img.png" alt="">
                    </div>
                </router-link>
            </div>
            <div class="loading-box" v-if="loading">Loading...</div>
            <div class="loading-box" v-if="noMore">No more.</div>
        </div>
        <!-- 首页的文章列表  取6条-->
        <div class="scroll-box" v-else>
            <div class="threads-box fixed-width-box">
                <router-link tag="div" :to="{ name: 'forums/detail', query: { id: item.id } }"
                    class="threads-item mb20 flex justify-between" v-for="item in list.slice(0, 6)">
                    <div class="left flex flex-direction justify-between">
                        <div class="name text-cut2 text-cut " title="">
                            <!-- Declined  Done -->
                            <!-- <span class="status-label"
                                :class="{ 'status-yellow': true, 'status-red': false, 'status-blue': false }">
                               {{formatter(item.auditStatus)  }}
                            </span> -->
                            {{ item.name }}
                        </div>
                        <div class="word text-cut2 text-cut" title="" v-html="item.content"></div>
                        <div class="thread-label flex align-center">
                            <div class="thread-label-item" v-for="x in 5">
                                Label A
                            </div>
                        </div>
                        <div class="user flex align-center">
                            <span>3 apr </span>
                            <div class="col-line mlr"></div>
                            <div class="flex align-center">
                                <img src="../../assets/course/img.png" alt="">
                                <span>Zhang User</span>
                            </div>
                        </div>
                        <div class="icons flex align-center">
                            <div class="mr20" v-for="item in iconList" :key="item.id">
                                <img :src="item.src" alt="">
                                <span>{{ item.label }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="right ml20">
                        <img src="@/assets/person/forum-img.png" alt="">
                    </div>
                </router-link>

            </div>
            <router-link v-if="list.length > 6" :to="{ name: 'forums', params: { type: 1 } }" class="more-box">
                More
                <i class="el-icon-arrow-right right-icon"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import { getArticlePage } from '@/api/home';


export default {
    components: {

    },
    computed: {
        noMore() {
            return this.queryParams.pageNum*this.queryParams.pageSize>=this.total
        },
        disabled() {
            return this.loading || this.noMore
        }
    },
    data() {
        return {
      
            loading: false,
            iconList: [{ src: require('../../assets/course/icon1.png'), label: '2000' },
            { src: require('../../assets/course/icon2.png'), label: '2000' },
            { src: require('../../assets/course/icon3.png'), label: '1.68k' },
            { src: require('../../assets/course/icon4.png'), label: '2000' },
            { src: require('../../assets/course/icon5.png'), label: '2000' },

            ],
            scrollHeight: '',
            routeName: '',
            queryParams: {
                pageNum: 1,
                pageSize: 4,
            },
            total:0,
            list: []
        };
    },
    created() {
        this.routeName = this.$route.name
        this.getList()
    },
    mounted() {
        window.addEventListener('resize', () => {
            let appHeight = document.getElementById('app').clientHeight
            let headerHeight = document.getElementsByClassName('header')[0].clientHeight
            let footerHeight = document.getElementsByClassName('footer-block')[0].clientHeight
            this.scrollHeight = appHeight - headerHeight - footerHeight - 90

        })

        this.scrollHeight = document.getElementById('app').clientHeight - document.getElementsByClassName('header')[0].clientHeight - document.getElementsByClassName('footer-block')[0].clientHeight - 90
    },
    methods: {
        getList() {
            this.loading = true
            getArticlePage(this.queryParams).then(res => {
                this.total=res.data.total
                if(this.queryParams.pageNum==1){
                    this.list = res.data.records
                }else{
                    this.list = [...this.list,...res.data.records]
                }
              
                this.loading = false
            })
        },
        load() {

            if (this.queryParams.pageNum * this.queryParams.pageSize < this.total) {
                this.queryParams.pageNum++
                this.getList()
            }



        },
        formatter(type) {

        }
    }
};
</script>
<style lang="scss">
// .edit-scroll{
//     ::-webkit-scrollbar {
//     width: 4px;
// }

// ::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
//     opacity: 0.2;
//     /* background: #FF8F00; */
//     background: transparent;
// }

// ::-webkit-scrollbar-track {
//     /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
//     border-radius: 0;
//     background: transparent;
// }
// }
</style>
<style lang="scss" scoped>
.scroll-box {
    overflow: auto;
}

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

            .status-label {
                padding: 0 5px;
                width: 94px;
                height: 20px;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
                margin-right: 13px;


            }

            .status-yellow {
                background: #FF9900;
            }

            .status-red {
                background: #F25151;
            }

            .status-blue {
                background: #5296E8;
            }

        }

        .word {

            font-size: 14px;
            font-weight: 400;
            color: #999999;
            line-height: 24px;
            // margin-top: 10px;
            // line-height: 24px;
        }

        .thread-label {

            .thread-label-item {
                padding: 6px;
                background: rgba(216, 216, 216, 0.3);
                height: 20px;
                border-radius: 4px;
                margin-right: 11px;
                font-size: 12px;
                color: #939393;
                line-height: 10px;
            }
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

            span {
                &:hover {
                    color: #dc0025;
                }
            }
        }

        .right {
            img {
                max-width: 130px;
                // height: 142px;
                height: auto;
            }

        }
    }
}

.fixed-width-box {
    // min-height: 800px;
}

.loading-box {
    width: 100%;
    height: 40px;
color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.more-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #3E454E;
    margin-bottom: 60px;

    .right-icon {
        // width: 17px;
        margin-top: 1px;
        margin-left: 3px;
    }

    &:hover {
        color: #dc0025;

        .right-icon {
            color: #dc0025;
        }
    }
}
</style>
