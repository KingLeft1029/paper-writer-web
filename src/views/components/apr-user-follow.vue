<template>
    <div class="user flex align-center">
        <span>{{ userInfo.num }} apr </span>
        <div class="col-line mlr"></div>
        <div class="flex align-center mr15">
            <img src="../../assets/course/img.png" alt="">
            <span>{{ userInfo.name }}</span>
        </div>
        <span v-if="userInfo.dec">{{ userInfo.dec }}</span>
        <btn btnText="Follow" btnType="8" v-if="userInfo.num!=3"></btn>
        <!-- <btn btnText="Follow" :btnType="userInfo.color = 'shadow'?'8':''"></btn> -->
       

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

   

}
</style>
      