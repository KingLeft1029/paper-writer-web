<template>
    <div class="dialog-box">
        <PopUp title="Session Sorting" width="900" ref="pop">

            <div class="flex align-center mb20">
                <img src="@/assets/icon/info.png" alt="">
                <span class="font12 text-grey ml10 mr10">Click</span>
                <img src="@/assets/course/sort-up.png" alt="">
                <img class="ml10" src="@/assets/course/sort-down.png" alt="">
                <span class="font12 text-grey ml10"> to reorder sessions</span>
            </div>
            <el-table ref="multipleTable" :row-style="rowStyle" :show-header="false" :data="tableData" tooltip-effect="dark"
                style="width: 100%" border>
                <el-table-column prop="address" label="address" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="Opreate" align="center" class-name="small-padding fixed-width">
                    <template slot-scope="scope">
                        <span class="mr20 font-weight">{{ scope.$index+1 }}</span>
                        <img class="middle pointer" src="@/assets/course/sort-up.png" alt="">
                        <img class="ml10 middle pointer" src="@/assets/course/sort-down.png" alt="">
                    </template>
                </el-table-column>
            </el-table>
          
            <div class="flex justify-center mt33">
                <el-button type="primary" class="common-btn-deepfix" @click="submitForm">Save</el-button>
                <el-button class="common-btn-borderfix ml20" @click="cancel">Cancel</el-button>
            </div>
        </PopUp>

    </div>
</template>
        
<script>
import PopUp from '@/components/PopUp'
export default {
    components: { PopUp },
    data() {
        return {
            show: false,
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                menuName: undefined,
            },
            tableData: [{
                date: '2016-05-03',
                nameMock: 'zhaohaha',
                id: '1'
            }, {
                date: '2016-05-02',
                nameMock: 'kingleft',
                id: '2'
            }, {
                date: '2016-05-04',
                nameMock: 'gongjun',
                id: '3'
            }, {
                date: '2016-05-01',
                nameMock: 'dazhangwei',
                id: '4'
            },],
            multipleSelection: [],
            total: 10
        };
    },
    methods: {
        rowStyle({ row, rowIndex }) {
            if (rowIndex === 0) {
                return { 'background': '#FAFAFA' };
            } else {
                return {};
            }
        },

        open() {
            this.$refs.pop.open()
        },
        /** 查询菜单列表 */
        getList() {
            this.loading = true;
            // listMenu(this.queryParams).then((response) => {
            // this.total = response.total;
            this.total = 25
            this.menuList = [{ menuName: 'name', icon: 'abc', orderNum: '1', perms: 'perms', component: '1' }]
            this.loading = false;
            // });
        },
        /** 搜索按钮操作 */
        handleQuery() {
            this.queryParams.pageNum = 1;
            this.getList();
        },
        /** 重置按钮操作 */
        resetQuery() {
            this.resetForm("queryForm");
            this.handleQuery();
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },

        submitForm() {
            if (this.multipleSelection.length <= 0) {
                this.$message.info('Please check')
                return false
            }
            this.$emit('addUserSelection', this.multipleSelection)
            this.show = false
            this.$refs.multipleTable.clearSelection();
            // console.log(this.multipleSelection,"this.multipleSelection")
        },
        cancel() {
            this.show = false
            this.$refs.multipleTable.clearSelection();
        }
    },
};
</script>
        
<style lang="scss" >
.dialog-box {
    .dialog-footer {}

}
</style>
        