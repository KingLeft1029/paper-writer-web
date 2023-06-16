<template>
  <div class="mt20 wallet-box">
    <div class="flex justify-between">
      <div class="left-ink">
        <div class="ink-btn-bot" @click="recharge">
          <span>Recharge</span>
        </div>
        <div class="ink-title">Ink</div>
        <div class="ink-num">10</div>
      </div>
      <div class="right-income">
        <router-link to="/withdraw" class="ink-btn-bot">
          <span>Withdraw</span>
        </router-link>
        <div class="ink-title">Income</div>
        <div class="ink-num">10</div>
        <div class="ink-mini">Total withdraw（$）:200000:00</div>
      </div>
    </div>
    <div class="relative mt20 mb20 table-tab-box">
      <TabChange @changeTab="changeTab" :navList="navList" width="620"></TabChange>
      <MoreTo path="/records"></MoreTo>
      <!-- <div class="more-class flex align-center more-absolute">
        More
        <img src="../../../assets/person/yellow-right.png" alt="" />
      </div> -->
      <el-table v-loading="loading" border :data="menuList">
        <el-table-column v-for="item in tableTitleList" :key="item.id" :prop="item.prop" align="center" :label="item.label"
          :show-overflow-tooltip="true">
        </el-table-column>
        <!-- <el-table-column
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
          ></el-table-column> -->

      </el-table>
    </div>

    <RechargeWalletDialog ref="rechargeRef"></RechargeWalletDialog>
  </div>
</template>

<script>
import TabChange from "../../components/TabChange.vue";
import RechargeWalletDialog from "./recharge-wallet-dialog.vue"
import MoreTo from '@/components/MoreTo'
export default {
  components: {
    TabChange,
    RechargeWalletDialog,
    MoreTo
  },
  data() {
    return {
      navList: ['Recharge history', 'Consume history', 'Income history', 'Withdraw history'],
      menuList: [{ a: '2102', b: '00000', c: 'xxxxxx' }, { a: '2102', b: '00000', c: 'xxxxxx' }],
      tableTitleList: [
        { label: 'Recharge time', prop: 'a' },
        { label: 'Amount（$）', prop: 'b' },
        { label: 'Ink', prop: 'c' }
      ],
      rechargeTitle:[
        { label: 'Recharge time', prop: 'a' },
        { label: 'Amount（$）', prop: 'b' },
        { label: 'Ink', prop: 'c' }
      ],
      consumeTitle: [
        { label: 'Consume time', prop: 'a' },
        { label: 'Ink', prop: 'b' },
        { label: 'Details', prop: 'c' }
      ],
      incomeTitle: [
        { label: 'Revenue time', prop: 'a' },
        { label: 'Ink', prop: 'b' },
        { label: 'Details', prop: 'c' }
      ],
      widthdrwaTitle: [
        { label: 'Withdrawal time', prop: 'a' },
        { label: 'Amount（$）', prop: 'b' },
        { label: 'Ink', prop: 'c' }
      ],
    }
  },

  methods: {
    changeTab(num) { 
        if(num==0){
          this.tableTitleList=this.rechargeTitle
        }else if (num==1){
          this.tableTitleList=this.consumeTitle
        }else if (num==2){
          this.tableTitleList=this.incomeTitle
        }else if (num==3){
          this.tableTitleList=this.widthdrwaTitle
        }
    },
    recharge() {
      this.$refs.rechargeRef.open()
    }
  }
};
</script>

<style lang="scss" scoped>
.wallet-box {
  ::v-deep .el-table thead {
    color: rgba(0, 0, 0, 0.85);
  }

  ::v-deep .el-table__empty-block {
    border-right: 1px solid #dfe6ec;
  }
}

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


.table-tab-box {
  padding: 20px;
  padding-top: 60px;
  border: 1px solid rgba(151, 151, 151, 0.17);
}
</style>