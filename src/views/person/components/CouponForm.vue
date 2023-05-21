<template>
    <div class="coupon-box">
      <div class="cpupon-top">
        {{ couponText }}
        <div class="required flex align-center" v-if="addShow">
              <span class="red">*</span>
              <span class="gray">Required</span>
          </div>
      </div>
    <template v-if="!addShow">
      <img class="distribute-class" src="../../../assets/course/img.png" @click="add" alt="" />
      <div class="statistics-box flex align-center justify-between">
        <div class="statistics-background flex justify-between">
          <div class="statistics-label">Total：</div>
          <div class="statistics-value">151511</div>
        </div>
        <div class="statistics-background flex justify-between">
          <div class="statistics-label">Used：</div>
          <div class="statistics-value">151511</div>
        </div>
        <div class="statistics-background flex justify-between">
          <div class="statistics-label">Total Ink：</div>
          <div class="statistics-value">151511</div>
        </div>
        <div class="statistics-background flex justify-between">
          <div class="statistics-label">Used Ink ：</div>
          <div class="statistics-value">151511</div>
        </div>
      </div>
      <div>
        <el-form :model="queryParams" ref="queryForm" :inline="true">
          <el-form-item label="Coupon Name" prop="menuName">
            <el-input
              v-model="queryParams.menuName"
              placeholder="Coupon Name"
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item label="Status" prop="status">
            <el-select
              v-model="queryParams.status"
              placeholder="Status"
              clearable
              size="small"
              style="width: 120px"
            >
              <el-option
                v-for="dict in dictOption"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Creation Time">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="Year/Month/Day"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              size="mini"
              @click="handleQuery"
              >Search</el-button
            >
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
              >Reset</el-button
            >
          </el-form-item>
        </el-form>
  
        <el-table v-loading="loading" :data="menuList" row-key="menuId">
          <el-table-column
            prop="menuName"
            align="center"
            label="Coupon ID"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="icon"
            label="Coupon Name"
            align="center"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="orderNum"
            label="Coupon Ink"
            :show-overflow-tooltip="true"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="perms"
            label="Applied courses"
            :show-overflow-tooltip="true"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="component"
            label="Distributed Users"
            :show-overflow-tooltip="true"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="component"
            label="Expiration Date"
            :show-overflow-tooltip="true"
            align="center"
          ></el-table-column>
  
          <!-- <el-table-column label="创建时间" align="center" prop="createTime">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.createTime) }}</span>
            </template>
          </el-table-column> -->
        </el-table>
        <pagination
          v-show="total > 0"
          :total="total"
          :page.sync="queryParams.pageNum"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
          layout=" prev, pager, next,sizes,jumper"
        />
      </div>
    </template>
    <add-coupon v-else></add-coupon>
    </div>
  </template>
  <script>
  import AddCoupon from './AddCoupon.vue'
  export default {
    components: {AddCoupon},
    data() {
      return {
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          menuName: undefined,
          visible: undefined,
        },
        dictOption: [],
        loading: false,
        menuList: [],
        total:0,
        value1:'',
        addShow:true,
        couponText:'Coupon Management',
      };
    },
    created(){this.getList()},
    methods: {
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
      add(){
        this.addShow=true
        this.couponText='Coupon Management - Distribute coupons'
      }
    },
  };
  </script>
        
        <style lang="scss" scoped>
  .coupon-box {
    width: 100%;
    position: relative;
    input {
    // height: 32px !important;
  }
  
    .cpupon-top {
      height: 40px;
      background: rgba(241, 241, 241, 0.54);
      border-radius: 6px 6px 0px 0px;
      line-height: 40px;
      padding-left: 20px;
      position: absolute;
      top: -28px;
      left: -20px;
      right: -20px;
    }
    .required {
          position: absolute;
          right: 30px;
          top:4px;
      }
      .red {
          color: #E93636;
          font-size: 14px;
          line-height: 22px;
          margin-top: 7px;
          margin-right: 6px;
      }
  
      .gray {
          line-height: 22px;
          color: rgba(0, 0, 0, 0.25);
      }
  
  
    .distribute-class {
      width: 358px;
      height: 102px;
      margin-top: 57px;
    }
  
    .statistics-box {
      margin-top: 18px;
      .statistics-background {
        background-image: url("../../../assets/person/background-img.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-left: 58px;
        padding-right: 28px;
        width: 294px;
        height: 59px;
        line-height: 50px;
  
        .statistics-label {
          color: #fff;
          font-style: 14px;
        }
  
        .statistics-value {
          color: #ff8f00;
          font-style: 16px;
        }
      }
    }
  }
  </style>
  <style lang="scss">
  
  </style>
        