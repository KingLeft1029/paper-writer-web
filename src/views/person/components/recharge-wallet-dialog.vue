<template>
  <div class="dialog-box">
    <!-- 添加或修改菜单对话框 -->

    <PopUp title="Recharge" ref="pop" width="940">
      <div class="step-box">
        <el-steps :space="200" :active="active" finish-status="success">
          <el-step title="Submit recharge"></el-step>
          <el-step title="payment password"></el-step>
          <el-step title="Recharged successful"></el-step>
        </el-steps>
      </div>
      <!-- 提交提现 -->
      <div class="mt20 form-box" v-if="active == 0">
        <div class="flex align-center">
          <span class="form-label">Ink：</span>
          <span class="yellow font16">{{ ink }}</span>
        </div>
        <div class="flex align-center mt23">
          <span class="red-star">*</span>
          <span class="form-label">Ink：</span>
        </div>
        <div class="flex align-center mt23">
          <div class="flex align-center justify-between" style="width: 100%">
            <div class="ink-item" v-for="(item, index) in numList" :class="{ 'ink-active': inkKey == index + 1 }"
              :key="index" @click="inkClick(index, item)">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="flex align-center mt23">
          <span class="form-label">Input Ink：</span>
          <el-input v-model="value" placeholder="Coupon Name" clearable size="small" @input="inputValue" />
        </div>
        <div class="flex align-center mt23">
          <span class="red-star">*</span>
          <span class="form-label">Recharge Method：</span>
          <el-radio v-model="radio" label="PayPal">PayPal</el-radio>
        </div>
      </div>
      <!-- 支付密码 -->
      <div class="mt20 form-box flex justify-between" v-if="active == 1">
        <div class="flex flex-direction align-center justify-around">
          <span>PayPal</span>
          <div class="code-class"></div>
          <span>Use mobile PayPal to scan code to complete payment</span>
        </div>
        <div class="code-line"></div>
        <div class="flex flex-direction pay-title  justify-around">
          <span class="pay-title ">Login to your PayPal account to pay</span>
          <el-input  v-model="username" placeholder="Enter Account name"></el-input>
          <el-input v-model="password" placeholder="Enter your payment password"></el-input>
        </div>
      </div>
      <!-- 充值成功 -->
      <div class="mt20 flex flex-direction align-center justify-center" v-if="active == 2">

      <i class="el-icon-circle-check success-icon"></i>
      <span>be recharged successfully</span>
      </div>

      <div class="flex justify-center mt41">
        <btn btnText="Confirm Recharge" btnType="7" @click.native="submitForm" v-if="active==0"></btn>
        <btn btnText="last step" btnType="1" @click.native="stepClick(1)" v-if="active==1"></btn>
        <btn btnText="next step" btnType="1" @click.native="stepClick(2)" v-if="active==1"></btn>
        <btn btnText="Confirm" btnType="1" @click.native="cancel" v-if="active==2"></btn>
      </div>
    </PopUp>
  </div>
</template>
        
<script>
import { addApi } from "@/api/recharge"
import { mapGetters } from 'vuex'
export default {
  components: {},

  data() {
    return {
      show: false,
      inkKey: 1,
      numList: ["1000", "5000", "10000", "20000", "30000"],
      value: '',
      radio: 'PayPal',
      inkValue: '1000',
      active: 0,
      username:'',
      password:''
    };
  },
  computed: {
    ...mapGetters(["ink"]),
   
  },
  methods: {
    open() {
      this.$refs.pop.open();
      this.value = ''
      this.active=0
    },

    submitForm() {
      if (this.active < 2) {
        this.active++
      }

      return
      



    },
    stepClick(num){
      if(num==1){
        this.active=0
      }else{
       
        let ink = this.inkValue ? this.inkValue : this.value
      let params = {
        ink,
        rechargeType:1
      }
      addApi(params).then(res => {
        this.active=2
   
      })
      }
    },
    cancel() {
      this.$refs.pop.close();
    },
    inkClick(index, item) {
      this.inkKey = index + 1;
      this.value = ''
      this.inkValue = item
    },
    inputValue(e) {
      if (e) {
        this.inkKey = null
      } else {
        this.inkKey = 1
      }
    }
  },
};
</script>
<style>
.el-step__head.is-success {
  color: #ec4114 !important;
  border-color: #ec4114 !important;

}

.el-step__title.is-process {

  color: rgba(0, 0, 0, 0.65) !important;
  font-weight: 400 !important;
  text-indent: -52px !important;
  width: 300px;
}

.el-step__title.is-wait {

  color: rgba(0, 0, 0, 0.65) !important;
  text-indent: -68px !important;
  width: 300px;
}

.el-step__title.is-success {

  color: rgba(0, 0, 0, 0.65) !important;
  text-indent: -36px !important;
  width: 300px;
}

.is-text {
  width: 32px;
  height: 32px;
}

.is-process .is-text {
  background-color: #EC4114 !important;
  color: #fff;
  border-color: #EC4114 !important;

}

.el-step__line {
  background-color: #EC4114 !important;
  height: 1px !important;
  margin-top: 3px;
  left: 38px !important;
  margin-right: 16px !important;
}
</style>     
<style lang="scss" scoped>
.dialog-box {}

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
  border-image: linear-gradient(180deg,
      rgba(248, 115, 8, 1),
      rgba(221, 2, 37, 1)) 2 2;
  color: #000000;
  background: linear-gradient(180deg, #fb7d05 0%, #dd0523 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-box {
  padding: 0 83px;
  // padding-left: 92px;
  span{
    white-space: nowrap;
  }

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
  padding-left: 135px;
}

.code-class {
  width: 136px;
  height: 136px;
  border: 1px solid #dedede;
}

.code-line {
  width: 1px;
  height: 233px;
  background-color: #dedede;
  margin: 0 30px;
}
.pay-title{
    
      width: 100%;
     }  
     .success-icon{
      color: #dd0523;
      font-size: 62px;
      margin: 56px 0;
     }

</style>
        