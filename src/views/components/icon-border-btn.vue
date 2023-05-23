<template>
     <div class="flex align-center justify-end inkjet-btn">
                <el-button type="primary">
                    <img src="@/assets/icon/icon-star.png" alt="">
                    Likes
                </el-button>
                <el-button type="primary">
                    <img src="@/assets/icon/icon-route.png" alt="">
                    Collects
                </el-button>
                <el-button type="primary">
                    <img src="@/assets/icon/icon-love.png" alt="">
                    Share
                </el-button>
            </div>
</template>
      
<script>

export default {
    components: {

    },
    data() {
        return {
          
        };
    },
    methods: {

    }
};
</script>
      
<style lang="scss" scoped>
 .inkjet-btn {
        .el-button {
            width: 78px;
            height: 26px;
            background: rgba(255, 143, 0, 0.08);
            border-radius: 4px;
            border: 1px solid rgba(224, 14, 34, 0.8);
            // border-image: linear-gradient(90deg, rgba(248, 116, 7,  0.8), rgba(224, 14, 34,  0.8)) 1 1;
            font-size: 13px;
            color: #FF8F00;
            display: flex;
            align-items: center;
            justify-content: center;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
        }

        span {
            font-size: 12px;
            color: #FF8F00;
            line-height: 18px;

            margin-top: 11px;
        }

        img {
            vertical-align: middle;
            margin-top: -2px;
        }
    }

</style>
      