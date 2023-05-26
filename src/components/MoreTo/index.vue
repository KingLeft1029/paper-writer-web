<template>
    <router-link tag="div" :to="path" class="more-class flex align-center more-absolute">
        More
        <img src="@/assets/person/yellow-right.png" alt="" />
    </router-link>
</template>
      
<script>

export default {
    components: {

    },
    props:{
        path:{
            type:String,
            default:()=>''

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
.more-absolute {
    position: absolute;
    right: 35px;
    top: 12px;
    cursor: pointer;
}
</style>
      