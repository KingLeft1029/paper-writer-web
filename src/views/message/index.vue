<template>
    <div class="container mt41 flex-sub">
        <Title title="Message List" />
        <div class="small-handler-label mt20">System Messages</div>
        <div class="all-mark" @click="allMark">All Marked</div>
        <el-table v-loading="loading" :header-cell-style="{ 'background-color': '#FAFAFA' }" :data="mockList"
            row-key="menuId">
            <el-table-column prop="nameMock" align="center" label="Messages Title" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="icon" label="Status" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <div class="small-circle-box flex align-center justify-center">
                        <div class="small-circle" :class="{ 'circle-red': true, 'circle-green': false }"></div>
                        <span> {{ scope.row.icon }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Type" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Time of upload" :show-overflow-tooltip="true">
            </el-table-column>
        </el-table>
        <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
            @pagination="getList" layout=" prev, pager, next,sizes,jumper" />
    </div>
</template>
      
<script>

export default {
    components: {

    },
    data() {
        return {
            queryParams: {
                pageNum: 1,
                pageSize: 10,

            },
            mockList: [
                {
                    nameMock: "name",
                    icon: "abc",
                    orderNum: "1",
                    perms: "perms",
                    component: "1",
                },
            ],
            total: 10,
        };
    },
    methods: {
        /** 查询菜单列表 */
        getList() {
            this.loading = true;
            // listMenu(this.queryParams).then((response) => {
            // this.total = response.total;
            this.total = 25
            // this.menuList =[{menuName:'name',icon:'abc',orderNum:'1',perms:'perms',component:'1'}]
            this.loading = false;
            // });
        },
        allMark(){}
    }
};
</script>
<style>
.el-table thead {

    color: rgba(0, 0, 0, 0.85);
}
</style>
<style lang="scss" scoped>
.all-mark {
    text-align: right;
    font-size: 14px;
    color: rgba(153, 153, 153, 0.65);
    line-height: 22px;
    margin-top: 29px;
    margin-bottom: 15px;
}

.small-circle-box {}

.small-circle {
    width: 6px;
    height: 6px;
    margin-right: 14px;
    border-radius: 50%;
}

.circle-red {
    background: #FF0002;
}

.circle-green {
    background: #1ABE6B;
}
</style>
      