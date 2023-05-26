<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <!-- Help and Support
            Teach on Mespery
            Terms of Use
            Privacy Policy -->
            <GreyTopTitle title="About us" ></GreyTopTitle>
            <div class="withdrawal-box" v-html="value">
              
            </div>



        </div>
    </div>
</template>
<script>

import GreyTopTitle from '../components/grey-top-title.vue'

export default {
    components: { GreyTopTitle,},
    data() {
        return {
            value:''
        };
    },
    created() { },
    methods: {
       
    },
};
</script>
        
<style lang="scss" scoped>
.withdrawal-box {
    padding: 0 20px;
    padding-top: 70px;

  
}
</style>
