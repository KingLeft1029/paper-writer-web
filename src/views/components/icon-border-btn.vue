<template>
    <div class="flex align-center justify-end inkjet-btn">
        <btn v-if="num != 2" btnText="Likes" btnType="5" :btnSrc="require('@/assets/icon/icon-love.png')"></btn>
        <btn btnText="Collects" btnType="5" :btnSrc="require('@/assets/icon/icon-star.png')"></btn>
        <btn btnText="Share" btnType="5" :btnSrc="require('@/assets/icon/icon-route.png')"></btn>
    </div>
</template>
      
<script>

export default {
    components: {

    },
    props: {
        num: {
            type: String,
            default: () => ''
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

</style>
      