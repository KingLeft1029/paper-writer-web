<template>
  <div class="coupons-check-box">
    <TabChange @changeTab="changeTab" :navList="navList" width="396"></TabChange>
    <div class="coupons-card-box">
      <div
        class="book-item flex flex-direction pointer"
        v-for="x in 8"
        :key="x"
      >
        <div
          class="use-top"
          :class="{
            'unuesd-class': navKey == '0',
            'used-class': navKey == '1',
            'expired-class': navKey == '2',
          }"
        >
          {{ navText }}
        </div>
        <div
          class="book-top flex align-center justify-between"
          :style="{ backgroundImage: 'url(' + url + ')' }"
        >
          <div class="lf flex align-center">
            <span>44</span>
            <div class="circle">ink</div>
          </div>

          <div class="ri">
            <div>Coupon Name</div>
            <div>2023.03.10-2023.05.2</div>
            <div>To use</div>
          </div>
        </div>
        <div
          class="flex align-center cou-mar"
          title="Course Name Course nCourse Name Course"
        >
          <div>Available products：</div>
          <div class="cou-label">commofdity</div>
          <div class="cou-label">commofdity</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabChange from "../../components/TabChange.vue";
export default {
  components: {
    TabChange,
  },
  data() {
    return {
      navList: ["Unuesd coupons", "Used", "Expired"],
      url: require("../../../assets/person/col-b.png"),
     
      navKey: 0,
    };
  },
  computed:{
    navText(){
        let val=''
        if(this.navKey==0){
            val="To be used"
        }else if(this.navKey==1){
            val="Used"
        }else{
            val="Expired"
        }
        return val
    }
  },
  methods: {
    changeTab(num){
        console.log(num,"cccccccccc")
        this.navKey=num
    }
  },
};
</script>

<style lang="scss" scoped>
.coupons-check-box {
  padding-top: 30px;
  .coupons-card-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 18px;
  }

  .book-item {
    width: 406px;
    height: 217px;
    border-radius: 12px;
    box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.13);
    position: relative;

    .use-top {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 91px;
      height: 21px;
      border-radius: 11px;
      font-size: 12px;
      font-weight: 400;
      color: #f64136;
      line-height: 21px;
      text-align: center;
    }

    .unuesd-class {
      background: #ffffff;
    }
    .expired-class {
      background: #dedede;
      color: #929292;
    }

    .used-class {
      background: rgba(255, 255, 255, 0.8);
    }

    &:hover {
      transform: translateY(-2px);
    }

    .book-top {
      width: 100%;
      height: 158px;
      padding: 0 51px;
      transition: all 0.4s;
      -moz-transition: all 0.4s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      background-repeat: no-repeat;
      /* 不会重复 */
      background-position: center;
      /* 是为了让图片放大的时候从中部放大，不会偏移 */
      background-size: 100% 100%;
      // margin-bottom: 12px;

      .lf {
        span {
          font-size: 50px;
          font-weight: 600;
          color: #f64136;
          line-height: 70px;
        }
        .circle {
          width: 25px;
          height: 25px;
          background: #f64136;
          font-size: 14px;
          color: #ffffff;
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
          margin-top: 15px;
          margin-left: 5px;
        }
      }

      .ri {
        div:nth-of-type(1) {
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
          line-height: 28px;
        }
        div:nth-of-type(2) {
          font-size: 12px;
          font-weight: 400;
          color: #ffffff;
          line-height: 18px;
          margin-top: 6px;
        }
        div:nth-of-type(3) {
          width: 82px;
          height: 28px;
          background: linear-gradient(180deg, #fcf5d8 0%, #f5df96 100%);
          box-shadow: 0px 5px 10px 0px #d62a1f;
          border-radius: 38px;
          font-size: 16px;
          color: #f84435;
          line-height: 28px;
          text-align: center;
          margin-top: 6px;
          cursor: pointer;
        }
      }
    }
  }
  .cou-label {
    width: 74px;
    height: 20px;
    background: rgba(216, 216, 216, 0.3);
    border-radius: 4px;
    font-size: 12px;
    color: #939393;
    line-height: 17px;
    text-align: center;
    line-height: 20px;
    margin-right: 16px;
  }
  .cou-mar {
    padding: 20px 15px;
  }
}
</style>