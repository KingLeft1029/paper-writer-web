<template>
    <div class="user flex align-center">
        <span>3 apr </span>
        <div class="col-line mlr"></div>
        <div class="flex align-center mr15">
            <img src="../../assets/course/img.png" alt="">
            <span>Zhang User</span>
        </div>
        <el-button type="primary" class="common-btn-edit" disabled>Follow</el-button>
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
    }

</style>
      