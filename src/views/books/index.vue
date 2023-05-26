<template>
    <div class="container flex-sub mt20">
       <div class="border-line">
        <GreyTopTitle title="My Books"></GreyTopTitle>
        <div class="padding20 ">
           <router-link to="/addbook">
            <el-button type="primary" class="common-btn-deep">Add new</el-button>
           </router-link>
            <div class="books-box mt20">
                <div class="book-item flex flex-direction pointer" v-for="x in 8">
                    <div class="book-top" :style="{ backgroundImage: 'url(' + url + ')' }"></div>
                    <div class="name text-cut text-cut2" title="Course Name Course nCourse Name Course">
                        Course Name Course nCourse Name Course nCourse Name Course nCourse Name Course nCourse Name Course
                        nCourse Name Course nCourse Name Course n
                    </div>
                </div>
            </div>
           
        </div>
        
        <!-- <div class="no-data">
            <EmptyBox emptyLabel="Add the link to other platforms for your book so more readers can see it."></EmptyBox>
            <div class="flex justify-center mt74">
                <el-button type="primary" class="common-btn-deep">Add new</el-button>
            </div>
        </div> -->
       </div>
       <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
            @pagination="getList" layout=" prev, pager, next,sizes,jumper" />
    </div>
</template>
      
<script>
import GreyTopTitle from '../components/grey-top-title.vue'
import EmptyBox from '@/components/EmptyBox';
export default {
    components: {
        GreyTopTitle,
        EmptyBox
    },
    data() {
        return {
            queryParams: {
                pageNum: 1,
                pageSize: 10,

            },
            total: 10,
            url: 'https://cdn.uviewui.com/uview/album/1.jpg'
        };
    },
    methods: {

    }
};
</script>
      
<style lang="scss" scoped>
.no-data {
    padding: 116px 0;
}

.border-line {
    border: 1px solid rgba(151, 151, 151, 0.17);
    border-radius: 6px;
    padding-bottom: 42px;
}

.books-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    .book-item {
        width: 216px;
        // height: 270px;
        border-radius: 6px;
        // border: 1px solid rgba(151, 151, 151, 0.18);
        // padding: 13px 20px;

        // &:hover{
        //         border-color: #dc0025;
        //     }

        .book-top {
            width: 100%;
            height: 260px;
            transition: all 0.4s;
            -moz-transition: all .4s;
            -webkit-transition: all .4s;
            -o-transition: all .4s;
            background-repeat: no-repeat;
            /* 不会重复 */
            background-position: center;
            /* 是为了让图片放大的时候从中部放大，不会偏移 */
            background-size: 100% 100%;
            margin-bottom: 12px;

            &:hover {
                background-size: 110% 110%;
            }
        }
    }
}
</style>
      