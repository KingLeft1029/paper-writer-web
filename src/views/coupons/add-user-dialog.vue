<template>
  <div class="dialog-box">
    <PopUp title="Add User" width="900" ref="pop">
      <div class="flex justify-between align-start">
        <el-form label-width="100px" :model="queryParams">
          <el-form-item label="Add User："  required>
            <el-input
            style="width:240px"
              v-model="queryParams.menuName"
              placeholder="Please enter the user nickname"
            />
          </el-form-item>
        </el-form>
        <div class="flex align-center mt5">
          <el-button class="common-btn-deep" type="primary" @click="onSubmit"
            >Search</el-button
          >
          <el-button class="common-btn-border">Reset</el-button>
        </div>
      </div>
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    border
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
  
    <el-table-column
      prop="nameMock"
      label="nameMock"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="address"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
        layout=" prev, pager, next,sizes,jumper"
      />
      <div class="flex justify-center mt33">
        <el-button type="primary" class="common-btn-deepfix" @click="submitForm">Add</el-button>
        <el-button class="common-btn-borderfix ml20" @click="cancel">Cancel</el-button>
        </div>
    </PopUp>
  
  </div>
</template>
      
      <script>
      import PopUp from '@/components/PopUp'
export default {
  components: {PopUp},
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
        }, ],
        multipleSelection: [],
        total:10
    };
  },
  methods: {
    open() {
      this.$refs.pop.open()
    },
      /** 查询菜单列表 */
      getList() {
      this.loading = true;
      // listMenu(this.queryParams).then((response) => {
        // this.total = response.total;
        this.total = 25
        this.menuList =[{menuName:'name',icon:'abc',orderNum:'1',perms:'perms',component:'1'}]
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
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      submitForm(){
        if(this.multipleSelection.length<=0){
            this.$message.info('Please check')
            return false
        }
        this.$emit('addUserSelection',this.multipleSelection)
        this.show=false
        this.$refs.multipleTable.clearSelection();
        // console.log(this.multipleSelection,"this.multipleSelection")
      },
      cancel(){
        this.show=false
        this.$refs.multipleTable.clearSelection();
      }
  },
};
</script>
      
      <style lang="scss" >
      .dialog-box{
      .dialog-footer{

      }
       
      }
</style>
      