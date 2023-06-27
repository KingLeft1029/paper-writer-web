<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="My Books"></GreyTopTitle>
            <div class="padding20 " v-if="list.length > 0">
                <router-link to="/addbook">
                    <el-button type="primary" class="common-btn-deep">Add new</el-button>
                </router-link>
                <div class="books-box mt20">
                    <div class="book-item flex flex-direction pointer" v-for="item in list" :key="item.id">
                        <el-image :src="baseUrl + item.image" fit="cover" lazy> </el-image>
                        <div class="name text-cut text-cut2 mt20" :title="item.name">
                            {{ item.name }}
                        </div>
                    </div>
                </div>

            </div>

            <div class="no-data" v-else>
                <EmptyBox emptyLabel="Add the link to other platforms for your book so more readers can see it."></EmptyBox>
                <div class="flex justify-center mt74">
                    <el-button type="primary" class="common-btn-deep" @click="add">Add new</el-button>
                </div>
            </div>
        </div>
        <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
            @pagination="getList" layout=" prev, pager, next,sizes,jumper" />
    </div>
</template>
      
<script>
import GreyTopTitle from '../components/grey-top-title.vue'
import EmptyBox from '@/components/EmptyBox';
import { listApi } from "@/api/book"
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
            baseUrl: process.env.VUE_APP_BASE_API,
            list: [],
            total: 0,
        };
    },
    created() {
        this.getList()
    },
    methods: {
        add() {
            this.$router.push({ path: '/books/add' })
        },
        getList() {
            this.loading = true;
            listApi().then(res => {
                this.list = res.data.records
                this.total = res.data.total;
                this.loading = false;
            })
        }
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

        border-radius: 6px;

        text-align: center;

        // border: 1px solid rgba(151, 151, 151, 0.18);
        // padding: 13px 20px;

        // &:hover{
        //         border-color: #dc0025;
        //     }
        ::v-deep .el-image {
            width: 100%;
            height: 260px;
        }

    }
}
</style>
      