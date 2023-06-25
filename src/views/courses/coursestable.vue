<template>
    <div class="container flex-sub mt41">
        <Title title="Course Management"></Title>
        <div class="flex align-center justify-between">
            <div class="screen-box flex align-center mt41">
                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="All Videos">
                    <el-option v-for="dict in dict.type.sym_pay_type" :key="dict.value" :label="dict.label"
                        :value="dict.value" />
                </el-select>
                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="Course Type">
                    <el-option v-for="dict in dict.type.sym_video_type" :key="dict.value" :label="dict.label"
                        :value="dict.value" />
                </el-select>

                <el-select class="mr20 width150" v-model="value" size="mini" value-key="" placeholder="Status">
                    <el-option v-for="dict in dict.type.sym_video_status" :key="dict.value" :label="dict.label"
                        :value="dict.value" />
                </el-select>

                <el-select class="width150" v-model="value" size="mini" value-key="" placeholder="All Tags">
                    <el-option v-for="dict in dict.type.sys_label" :key="dict.value" :label="dict.label"
                        :value="dict.value" />
                </el-select>
            </div>
            <div class="add-thread flex align-center justify-center" @click="$router.push({ path: '/videos/addcourse' })">

                <span> New Course</span>

            </div>
        </div>
        <el-table class="mt20" v-loading="loading" border :header-cell-style="{ 'background-color': '#FAFAFA' }"
            :data="list" row-key="menuId" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column prop="courseName" align="center" label="Course Title" width="120"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="courseType" align="center" label="Course Type" width="120" :formatter="formatter"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="paymentType" align="center" label="Charge Type" width="120" :show-overflow-tooltip="true"
                :formatter="formatterPay">
            </el-table-column>
            <el-table-column prop="cost" align="center" label="Ink Charge" width="120" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Commission Ink" width="130"
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Income Ink" width="120" sortable
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="label" align="center" label="Tags" :show-overflow-tooltip="true"
                :formatter="formatterLabel">
            </el-table-column>
            <el-table-column prop="status" align="center" label="Status" :show-overflow-tooltip="true"
                :formatter="formatterStatus">
            </el-table-column>
            <el-table-column prop="nameMock" align="center" label="Newest" sortable width="120"
                :show-overflow-tooltip="true">
            </el-table-column>
            <!-- 1、“删除”按钮：仅审核驳回、状态有此按钮
                 2、 “编辑”按钮：仅审核驳回 状态有此按钮；编辑保存成功，管理后台需审核，审核成功，其他用户可见。
                 3、“驳回原因”按钮：仅审核驳回  状态有此按钮
                 4、“查看”按钮：仅待审核、 发布成功  、状态有此按钮  待发布0 待审核1 s审核通过2 审核驳回3 发布成功9 -->
            <el-table-column prop="nameMock" align="center" label="Opreate" width="155" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <div class="flex justify-center">
                        <span class="text-yellow pointer" @click="viewClick(scope.row)" v-if="scope.row.auditStatus == 1||scope.row.auditStatus == 9">View</span>
                        <div class="col-line ml10 mr10" v-if="scope.$index == 0"></div>
                        <span class="text-yellow pointer" v-if="scope.row.auditStatus == 3" @click="mangeClick(scope.row)">Course
                            Management </span>
                        <!-- <div class="col-line"></div> -->
                        <span class="text-yellow pointer" v-if="scope.row.auditStatus == 3">Reason for rejection</span>
                        <!-- <div class="col-line"></div> -->
                        <span class="text-yellow pointer" v-if="scope.row.auditStatus == 3" @click="delClick(scope.row)">Delete</span>
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
        <PopUp title="Reason for rejection" width="420">
            <div class="mt20 font12 text-grey">
                rticle descriptionArticle descriptionArticle descriptionArticle descriptionArticle descriptiona Article
                descriptionArticle descriptionArticle
            </div>
            <div class="flex justify-end mt33">
                <btn btnText="Determine" btnType="1"></btn>
            </div>
        </PopUp>
        <!-- 弹窗组件 -->
        <PopUp title="hint" ref="hint" width="420">
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
import { listApi } from '@/api/video'

export default {
    dicts: ['sys_label', 'sym_video_status', 'sym_video_type', 'sym_pay_type'],
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
            total: 0,
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
            list: [

            ],

        };
    },
    created() {
        this.getList()
    },
    methods: {
        /** 查询菜单列表 */
        getList() {
            this.loading = true;
            listApi(this.queryParams).then((response) => {
                this.total = response.total;
                this.list = response.data.records
                this.loading = false;
            });
        },
        formatter(row, column) {

            let val = this.dict.type.sym_video_type.map(item => {
                if (item.value == row.courseType) {
                    return item.label
                }
            })
            return val
        },
        formatterPay(row, column) {
            let val = this.dict.type.sym_pay_type.map(item => {
                if (item.value == row.paymentType) {
                    return item.label
                }
            })
            return val
        },
        formatterStatus(row, column) {
            let val = this.dict.type.sym_video_status.map(item => {
                if (item.value == row.auditStatus) {
                    return item.label
                }
            })

            return val
        },
        formatterLabel(row, column) {
            let rowList = row.label.split(',')
            const list = rowList.map(item => {
                const obj = this.dict.type.sys_label.find(con => con.value == item)
                return obj.label

            })
            return list.join(',')
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
      