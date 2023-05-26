<template>
  <div>
    <div class="flex align-center justify-between">
      <div class="coupon-btn flex align-center justify-between">
        <img src="../../../assets/person/ink-icon.png" alt="" />
        New coupon
      </div>
      <MoreTo path="/coupons"></MoreTo>
      <!-- <div class="more-class flex align-center">
        More
        <img src="../../../assets/person/yellow-right.png" alt="" />
      </div> -->
    </div>
    <div class="echart-box mt20 flex align-center justify-between mb20">
      <div class="echart-item flex align-center">
        <div class="flex flex-direction align-center">
          <div class="echart-item-name">Add Coupon</div>
          <div class="flex align-center">
            <el-progress
              width="92"
              color="#DC0025"
              type="circle"
              :percentage="20"
            ></el-progress>
          </div>
        </div>
        <div class="flex flex-direction echart-num">
          <span>80000</span>
          <span>ink</span>
        </div>
      </div>

      <div class="echart-item flex align-center">
        <div class="flex flex-direction align-center">
          <div class="echart-item-name">Used Coupons</div>
          <div class="flex align-center">
            <el-progress
              width="92"
              color="#6DD400"
              type="circle"
              :percentage="20"
            ></el-progress>
          </div>
        </div>
        <div class="flex flex-direction echart-num">
          <span>80000</span>
          <span>ink</span>
        </div>
      </div>

      <div class="echart-item flex align-center">
        <div class="flex flex-direction align-center">
          <div class="echart-item-name">Unuesd coupons</div>
          <div class="flex align-center">
            <el-progress
              width="92"
              color="#FF8F00"
              type="circle"
              :percentage="20"
            ></el-progress>
          </div>
        </div>
        <div class="flex flex-direction echart-num">
          <span>80000</span>
          <span>ink</span>
        </div>
      </div>
    </div>
    <el-table v-loading="loading" :data="mockList" :header-cell-style="{ 'background-color': '#FAFAFA' }">
      <el-table-column
        prop="nameMock"
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
        prop="Coupon Ink"
        label="Coupon Ink"
        align="center"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop="Applied courses"
        label="Applied courses"
        align="center"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop="Expiration Date"
        label="Expiration Date"
        align="center"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import MoreTo from '@/components/MoreTo'
export default {
  components:{
    MoreTo
  },
  data() {
    return {
      loading: false,
      mockList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.coupon-btn {
  width: 137px;
  height: 32px;
  padding: 16px;
  border: 1px solid  rgba(223, 13, 33, 0.5);
  cursor: pointer;
  border-radius: 4px;
background: linear-gradient(131deg, rgba(255, 143, 0,0.1) 0%, rgba(220, 0, 37,0.1) 100%);
  font-size: 14px;
color: rgba(223, 13, 33, 0.5);
  font-weight: 400;
  line-height: 32px;

  &:hover{
    background: linear-gradient(131deg, rgba(255, 143, 0,0.3) 0%, rgba(220, 0, 37,0.3) 100%);
  }
 
}

.echart-box {
  padding: 9px 49px;
  width: 822px;
  height: 160px;
  background: rgba(255, 95, 104, 0.04);

  .echart-item {
    position: relative;
    .echart-item-name {
      font-size: 14px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      margin-bottom: 10px;
    }
  }
  .echart-num {
    margin-left: 15px;
    margin-top: 28px;
    span:nth-of-type(1) {
      font-size: 18px;
      font-weight: 600;
      color: #969696;
      line-height: 18px;
      background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    span:nth-of-type(2) {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 500;
      color: #969696;
      line-height: 18px;
      margin-top: 4px;
    }
  }
}
</style>