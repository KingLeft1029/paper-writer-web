<template>
    <div class="container flex-sub mt41">
        <Title title="Course Management"></Title>
        <div class="flex align-center justify-between">
            <div class="screen-box flex align-center mt41">
                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="All Videos">
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
            <div class="add-thread flex align-center justify-center" @click="$router.push({ path: '/videos/addcourse' })">

                <span> New Course</span>

            </div>
        </div>
        <el-table class="mt20" v-loading="loading" border :header-cell-style="{ 'background-color': '#FAFAFA' }"
            :data="mockList" row-key="menuId" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column prop="nameMock" align="center" label="Course Title" width="120" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Course Type" width="120" :formatter="formatter"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Fee Type" width="120" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Ink Charge" width="120" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Commission Ink" width="130"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Income Ink" width="120" sortable
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Tags" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Status" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Newest" sortable width="120"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Opreate" width="155" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <div class="flex justify-center">
                        <span class="text-yellow pointer" @click="viewClick(scope.row)" v-if="scope.$index == 0">View</span>
                        <div class="col-line ml10 mr10"  v-if="scope.$index == 0"></div>
                        <span class="text-yellow pointer"  v-if="scope.$index==1" @click="mangeClick(scope.row)">Course Management </span>
                        <!-- <div class="col-line"></div> -->
                        <span class="text-yellow pointer"  v-if="scope.$index==2">Reason for rejection</span>
                        <!-- <div class="col-line"></div> -->
                        <span class="text-yellow pointer" @click="delClick(scope.row)" v-if="scope.$index == 0">Delete</span>
                    </div>
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
                <btn btnText="Determine" btnType="1"></btn>
            </div>
        </PopUp>
        <!-- 弹窗组件 -->
        <PopUp title="hint" ref="hint" :width="420">
            <div class="mt20 font12 text-black">
                Are you sure you want to delete it?
            </div>
            <div class="flex justify-end mt33">
                <btn btnText="Determine" btnType="1" @click="determine"></btn>
        <btn btnText="Cancel" btnType="2" @click="cancel"></btn>
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
            value: '',
            loading: false,
            queryParams: {
                pageNum: 1,
                pageSize: 10,

            },
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            mockList: [
                {
                    nameMock: "name",
                    icon: "abc",
                    orderNum: "1",
                    perms: "perms",
                    component: "1",
                },
                {
                    nameMock: "name",
                    icon: "abc",
                    orderNum: "1",
                    perms: "perms",
                    component: "1",
                },
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
        },
        delClick(item) {
            this.$refs.hint.open(item)
        },
        viewClick(item) {
            this.$router.push({ path: '/videos/video', query: { id: 1 } })
        },
        mangeClick(item) {
            this.$router.push({ path: '/videos/managementcourse', query: { id: 1 } })
        },
        determine() {

            this.$message.success("successfully delete");
            this.cancel()
        },
        cancel() {
            this.$refs.hint.close()
        },
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
      