<template>
  <div class="mt20">
    <div class="flex justify-between">
      <div class="left-ink">
        <div class="ink-btn-bot" @click="recharge">
          <span>Recharge</span>
        </div>
        <div class="ink-title">Ink</div>
        <div class="ink-num">10</div>
      </div>
      <div class="right-income">
        <div class="ink-btn-bot">
          <span>Withdraw</span>
        </div>
        <div class="ink-title">Income</div>
        <div class="ink-num">10</div>
        <div class="ink-mini">Total withdraw（$）:200000:00</div>
      </div>
    </div>
    <div class="relative mt20 mb20">
        <TabChange @changeTab="changeTab" :navList="navList" width="620" ></TabChange>
        <div class="more-class flex align-center more-absolute">
        More
        <img src="../../../assets/person/yellow-right.png" alt="" />
      </div>
    </div>
    <el-table v-loading="loading" border :data="menuList">
          <el-table-column
            prop="menuName"
            align="center"
            label="Revenue time"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="icon"
            label="Ink"
            align="center"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="orderNum"
            label="Details"
            :show-overflow-tooltip="true"
            align="center"
          ></el-table-column>

        </el-table>
        <RechargeWalletDialog ref="rechargeRef"></RechargeWalletDialog>
  </div>
</template>

<script>
import TabChange from "../../components/TabChange.vue";
import RechargeWalletDialog from "./recharge-wallet-dialog.vue"
export default {
    components: {
    TabChange,
    RechargeWalletDialog,
  },
    data(){
        return{
            navList:['Recharge history','Consume history','Income history','Withdraw history']
        }
    },
    methods:{
        changeTab(){},
        recharge(){
            this.$refs.rechargeRef.open()
        }
    }
};
</script>

<style lang="scss" scoped>
// .el-table__empty-block{
//     border-right: 1px solid ;
// }
.left-ink {
  width: 401px;
  height: 160px;
  background-image: url("../../../assets/person/ink-yellow.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  position: relative;
}
.right-income {
  width: 401px;
  height: 160px;
  background-image: url("../../../assets/person/ink-blue.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  position: relative;
}
.ink-btn-bot {
  width: 108px;
  height: 26px;
  background: #ffffff;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  line-height: 26px;
  text-align: center;
cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;

  span {
    background-image: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.ink-title {
  font-size: 29px;
  font-weight: 500;
  color: #ffffff;
  line-height: 42px;
  letter-spacing: 1px;
  margin-bottom: 5px;
}
.ink-num {
  font-size: 24px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #fff3cd;
  line-height: 22px;
  margin-bottom: 15px;
}
.ink-mini {
  font-size: 12px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 16px;
}
.more-absolute{
    position: absolute;
    right: 35px;
    top: 12px;
}
</style>