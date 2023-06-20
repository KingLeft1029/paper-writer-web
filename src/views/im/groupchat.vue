<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Wallet Ink Details"></GreyTopTitle>
            <div class="padding20">
                <div class="flex justify-between">
                    <div class="screen-box flex align-center">
                        <el-input placeholder="nickname" style="width:140px" v-model="nickname"> </el-input>
                        <SortInput label="User group identity" type="1" style="width:178px" @sort="sortNew"></SortInput>
                        <el-date-picker class="ml20" v-model="value1" style="width:320px" type="daterange"
                            range-separator="-" start-placeholder="date commenced" end-placeholder="date closed">
                        </el-date-picker>
                    </div>
                    <div class="flex">
                        <btn class="mr10" btnText="search for" btnType="10"
                            :btnSrc="require('@/assets/im/search-yellow.png')">
                        </btn>
                        <btn btnText="Empty" btnType="10" :btnSrc="require('@/assets/im/delete-yellow.png')"></btn>
                    </div>
                </div>
                <btn class="mt25" btnText="Dissolve group chat" btnType="11"></btn>
                <el-table border class="mt20" v-loading="loading" :data="menuList"
                    :header-cell-style="{ 'background-color': '#FAFAFA' }">

                    <el-table-column label="Serial Number" prop="1" width="125" :show-overflow-tooltip="true"
                        align="center" />
                    <el-table-column label="nickname" prop="1" :show-overflow-tooltip="true" align="center" />
                    <el-table-column label="Gender" prop="1" :show-overflow-tooltip="true" align="center" />
                    <el-table-column label="Age" prop="1" :show-overflow-tooltip="true" align="center" />
                    <el-table-column label="User group identity" width="225" prop="1" :show-overflow-tooltip="true"
                        align="center" />
                    <el-table-column label="Date of joining the group" width="225" prop="1" :show-overflow-tooltip="true"
                        align="center" />
                    <el-table-column label="State" prop="1" :show-overflow-tooltip="true" align="center" />
                    <el-table-column label="Operate" prop="1"  fixed="right" width="345" :show-overflow-tooltip="true" align="center">
                        <template slot-scope="scope">
                            <div class="handler-box flex justify-around">
                                <div class="view-btn">View</div>
                                <div class="pro-btn">Prohibition</div>
                                <div class="new-btn">newly added</div>
                                <div class="del-btn">Delete</div>
                            </div>
                            <!-- <el-button size="mini" type="text" class="del"
                                @click="handleDelete(scope.row, scope.$index)">Delete</el-button> -->
                        </template>

                    </el-table-column>
                </el-table>
                <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum"
                    :limit.sync="queryParams.pageSize" @pagination="getList" layout=" prev, pager, next,sizes,jumper" />
            </div>


        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'

export default {
    components: { GreyTopTitle, },
    data() {
        return {
            nickname: '',
            value1: '',
            queryParams: {
                pageNum: 1,
                pageSize: 10,

            },
            total: 10,
            menuList: [{ a: '2102', b: '00000', c: 'xxxxxx' }, { a: '2102', b: '00000', c: 'xxxxxx' }],
        };
    },
    created() { },
    methods: {

    },
};
</script>
        
<style lang="scss" scoped>
.handler-box {
    div {
        height: 22px;
        border-radius: 2px;
        padding: 0 8px;
        text-align: center;
        line-height: 22px;
        color: #fff;
cursor: pointer;

    }

    .view-btn {
        background: #4F95E8;
    }

    .pro-btn {
        background: #009688;
    }

    .new-btn {
        background: #F7D358;
    }

    .del-btn {
        background: #FF5721;
    }

}
</style>
<style lang="scss">
.el-date-editor .el-range__icon {
    line-height: 15px !important;
}

.el-date-editor .el-range__close-icon {
    line-height: 15px !important;
}

.el-date-editor .el-range-separator {
    line-height: 15px !important;
}
::-webkit-scrollbar {
  height: 8px;

}

::-webkit-scrollbar-thumb {
    background: rgb(153, 169, 191,0.3);
}
</style>
        