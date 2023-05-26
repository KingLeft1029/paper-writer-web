<template>
    <div class="user flex align-center">
        <span>{{ userInfo.num }} apr </span>
        <div class="col-line mlr"></div>
        <div class="flex align-center mr15">
            <img src="../../assets/course/img.png" alt="">
            <span>{{ userInfo.name }}</span>
        </div>
        <span v-if="userInfo.dec">{{ userInfo.dec }}</span>
        <el-button type="primary" class="common-btn-edit" v-else :class="{ 'shadow-btn': userInfo.color = 'shadow' }"
            disabled>Follow</el-button>

    </div>
</template>
      
<script>

export default {
    components: {

    },
    props: {
        userInfo: {
            type: Object,
            default: () => { }
        }
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
.user {
    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;

    }

    .mlr {
        margin: 0 13px;
    }

    .shadow-btn {
        height: 20px;
        background: rgba(255, 143, 0, 0.08);
        border-radius: 4px;
        border: 1px solid;
        // border-image: linear-gradient(90deg, rgba(248, 116, 7, 1), rgba(224, 14, 34, 1)) 1 1;
        font-size: 13px;
        color: #FF8F00;
        line-height: 0;
        text-align: center;

    }
}
</style>
      