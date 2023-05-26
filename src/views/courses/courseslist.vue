<template>
    <div class="container flex-sub mt41">
        <Title title="Course Management"></Title>
        <div class="flex align-center justify-between">
            <div class="screen-box flex align-center mt41">
                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="All Courses">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="Course Type">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="Status">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

                <el-select class="width150" v-model="value" size="mini" value-key="" placeholder="All Tags">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="add-thread flex align-center justify-center">
                <router-link tag="div" to="/addcourse">
                    <span> New Course</span>
                </router-link>
            </div>
        </div>
        <el-table class="mt20" v-loading="loading" border :header-cell-style="{ 'background-color': '#FAFAFA' }"
            :data="mockList" row-key="menuId" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column prop="nameMock" align="center" label="Course Title" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Course Type" :formatter="formatter"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Fee Type" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Ink Charge" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Commission Ink" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Income Ink" sortable :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Tags" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Status" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Newest" sortable :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Opreate" width="150" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <span class="text-yellow pointer">View</span>
                    <div class="col-line"></div>
                    <span class="text-yellow pointer">Course Management </span>
                    <div class="col-line"></div>
                    <span class="text-yellow pointer">Reason for rejection</span>
                    <div class="col-line"></div>
                    <span class="text-yellow pointer">Delete</span>
                </template>
            </el-table-column>

            <!-- <el-table-column prop="icon" label="Status" align="center" :show-overflow-tooltip="true" /> -->
            <!-- <template slot-scope="scope">
                    <div class="small-circle-box flex align-center justify-center">
                        <div class="small-circle" :class="{ 'circle-red': true, 'circle-green': false }"></div>
                        <span> {{ scope.row.icon }}</span>
                    </div>
                </template>
            </el-table-column> -->

        </el-table>
        <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
            @pagination="getList" layout=" prev, pager, next,sizes,jumper" />

        <!-- 弹窗组件 -->
        <PopUp title="Reason for rejection" :width="420">
            <div class="mt20 font12 text-grey">
                rticle descriptionArticle descriptionArticle descriptionArticle descriptionArticle descriptiona Article
                descriptionArticle descriptionArticle
            </div>
            <div class="flex justify-end mt33">
                <el-button type="primary" class="common-btn-deep">
                    Determine
                </el-button>
            </div>
        </PopUp>
    </div>
</template>
      
<script>
import Title from '@/components/Title'
export default {
    components: {
        Title
    },
    data() {
        return {
            loading: false,
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
        formatter(row, column) {
            return row.address;
        }
    }
};
</script>
      
<style lang="scss" scoped>
.add-thread {
    width: 358px;
    height: 102px;
    background-image: url('@/assets/person/new-course.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;


    span {
        font-size: 24px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 33px;
        background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>
      