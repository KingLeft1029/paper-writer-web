<template>
    <div class="edit-scroll">
         <div class="scroll-box" v-if="routeName == 'videos'"  :style="{ 'height': scrollHeight + 'px' }"
            v-infinite-scroll="load" infinite-scroll-disabled="disabled">
            <div class="course-list">
                <div class="course-item" v-for="(item, index) in list"
                    @click="$router.push({ path: '/videos/detail', query: { id: item.id } })" :key="item.id">
                    <div class="course-top">
                        <el-image class="course-top" :src="baseUrl + item.coverChart" fit="cover" lazy></el-image>
                        <img class="status-img" v-if="item.paymentType==1" src="../../assets/course/free.png" alt="">
                        <img class="status-img" v-else src="../../assets/course/paid.png" alt="">
                    </div>
                    <div class="course-bottom">
                        <div class="name text-cut text-cut2" title="Course Name Course nCourse Name Course">
                            Course Name Course nCourse Name Course nCourse Name Course nCourse Name Course nCourse Name
                            Course
                            nCourse Name Course nCourse Name Course n
                        </div>
                        <div class="tag">
                            <el-tag v-for="x in 8" @click="toTag(x)">标签一</el-tag>
                        </div>
                        <div class="ink flex align-center">
                            <span class="text-yellow font-weight font20">9999Ink</span>
                            <div class="col-line mlr"></div>
                            <span class="grey">21 Learners</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loading-box" v-if="loading">Loading...</div>
            <div class="loading-box" v-if="noMore">No more.</div>
        </div>
        <div class="scroll-box" v-else>
            <div class="course-list">
                <div class="course-item" @click="$router.push({ path: '/videos/detail', query: { id: 1 } })"
                    v-for="(item, index) in 6" :key="item.id">
                    <div class="course-top" :style="{ backgroundImage: 'url(' + url + ')' }">
                      
                        <img class="status-img" src="../../assets/course/free.png" alt="">
 
                    </div>
                    <div class="course-bottom">
                        <div class="name text-cut text-cut2" title="Course Name Course nCourse Name Course">
                            Course Name Course nCourse Name Course nCourse Name Course nCourse Name Course nCourse Name
                            Course
                            nCourse Name Course nCourse Name Course n
                        </div>
                        <div class="tag">
                            <el-tag v-for="x in 8">标签一</el-tag>
                        </div>
                        <div class="ink flex align-center">
                            <span class="text-yellow font20 font-weight">9999Ink</span>
                            <div class="col-line mlr"></div>
                            <span class="grey">21 Learners</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { getCoursePage } from '@/api/home';

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
            baseUrl: process.env.VUE_APP_BASE_API,
            loading: false,
            url: require('../../assets/course/img.png'),
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
            getCoursePage(this.queryParams).then(res => {
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
        //点击标签 筛选
        toTag(item) {

        }
    }
};
</script>
<style lang="scss">
.edit-scroll {
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
     
        background: rgb(153, 169, 191,0.1);
    border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
        border-radius: 0;
        background: transparent;
    }
}
</style>
<style lang="scss" scoped>
.scroll-box {
    overflow: auto;

}

.course-list {
    // height: 100%;
    // margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.7%;
    grid-auto-flow: row;

    // grid-template-areas:
    //     ". . ."
    //     ". . .";
    justify-content: space-around;

    .course-item {
        margin-bottom: 20px;

        background: #ffffff;
        border-radius: 6px;
        border: 1px solid rgba(151, 151, 151, 0.18);
        cursor: pointer;
        // overflow: hidden;

        &:hover {
            border-color: #dc0025;
        }


        .course-top {
            height: 184px;
            width: 100%;
            border-radius: 6px;
            position: relative;
          

            .status-img {
    
                position: absolute;
                top: -2px;
                left: 0;
              
            }
          .el-image{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
          
        }

        .course-bottom {
            padding: 8px 20px;

            .name {
                width: 100%;
                margin-bottom: 5px;
                font-weight: 600;
                color: #3E454E;
                line-height: 22px;
            }

            .tag {
                display: grid;
                margin-bottom: 8px;
                grid-template-columns: repeat(auto-fill, 56px);
                grid-gap: 10px;

                .el-tag {
                    background-color: rgba(151, 151, 151, 0.18);
                    border: none;
                    color: #61687C;
                    height: 20px;
                    line-height: 24px;
                    text-align: center;
                    cursor: pointer;

                    &:hover {
                        background-color: rgba(151, 151, 151, 0.28);
                    }
                }

            }

            .ink {
                line-height: 28px;

                .mlr {
                    margin: 0 11px;
                }
            }
        }

    }
}

.loading-box {
    width: 100%;
    height: 40px;
color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
