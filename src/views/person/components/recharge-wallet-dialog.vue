<template>
  <div class="dialog-box">
    <!-- 添加或修改菜单对话框 -->
    <el-dialog
      ref="rechargeRef"
      title="Recharge"
      :visible.sync="show"
      width="940px"
      append-to-body
    >
      <div class="step-box">
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="Submit recharge"></el-step>
          <el-step title="payment password"></el-step>
          <el-step title="Recharged successful"></el-step>
        </el-steps>
      </div>
      <div class="mt20 form-box">
        <div class="flex align-center">
          <span class="form-label">Ink：</span>
          <span class="yellow font16">10999</span>
        </div>
        <div class="flex align-center mt23">
          <span class="red-star">*</span>
          <span class="form-label">Ink：</span>
        </div>
        <div class="flex align-center mt23">
          <div class="flex align-center justify-between" style="width: 100%">
            <div
              class="ink-item"
              v-for="(item, index) in numList"
              :class="{ 'ink-active': inkKey == index }"
              :key="index"
              @click="inkClick(index)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="flex align-center mt23">
          <span class="form-label">Input Ink：</span>
          <el-input
            v-model="value"
            placeholder="Coupon Name"
            clearable
            size="small"
          />
        </div>
        <div class="flex align-center mt23">
          <span class="red-star">*</span>
          <span class="form-label">Recharge Method：</span>
          <el-radio v-model="radio" label="PayPal">PayPal</el-radio>
        </div>
      </div>

      <div slot="footer" class="dialog-footer flex justify-center">
        <el-button type="primary" class="common-btn-long" @click="submitForm"
          >Confirm Recharge</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
        
        <script>
export default {
  components: {},
  data() {
    return {
      show: false,
      inkKey: 0,
      numList: ["1000", "5000", "10000", "20000", "30000"],
    };
  },
  methods: {
    open() {
      this.show = true;
    },

    submitForm() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    inkClick(index) {
      this.inkKey = index;
    },
  },
};
</script>
   <style>
.el-step__head.is-success {
  color: #ec4114;
  border-color:#ec4114;
}
.el-step__title.is-success{
    color: #ec4114;
}
.is-text{
    width: 32px;
height: 32px;
}
.is-process .is-text{
background-color: #EC4114;
color: #fff;
border-color: #EC4114;

}
.el-step__line{
    background-color:#EC4114;
    height: 1px !important;
    margin-top: 4px;
}
</style>     
 <style lang="scss" scoped>
.dialog-box {
}
.ink-item {
  width: 88px;
  height: 40px;
  background: rgba(216, 216, 216, 0.2);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #dd0523;
  }
}
.ink-active {
  border: 1px solid;
  border-image: linear-gradient(
      180deg,
      rgba(248, 115, 8, 1),
      rgba(221, 2, 37, 1)
    )
    2 2;
  color: #000000;
  background: linear-gradient(180deg, #fb7d05 0%, #dd0523 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.form-box {
  padding: 0 126px;
  .form-label {
    white-space: nowrap;
  }
  div {
    position: relative;
  }
  .red-star {
    position: absolute;
    color: #dd0523;
    left: -6px;
  }
}
.step-box {
  padding: 0 126px;
}
</style>
        