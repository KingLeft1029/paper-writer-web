<template>
    <div class="icons flex align-center">
        <div class="ml20" v-for="item in iconList" :key="item">
            <img :src="item.src" alt="">
            <span>{{ item.label }}</span>
        </div>
    </div>
</template>
      
<script>

export default {
    components: {

    },
    data() {
        return {
            iconList: [{ src: require('@/assets/course/icon1.png'), label: '2000' },
            { src: require('@/assets/course/icon2.png'), label: '2000' },
            { src: require('@/assets/course/icon3.png'), label: '1.68k' },
            { src: require('@/assets/course/icon4.png'), label: '2000' },
            { src: require('@/assets/course/icon5.png'), label: '2000' },

            ],
        };
    },
    methods: {

    }
};
</script>
      
<style lang="scss" scoped>
   .icons {
        line-height: 24px;
        color: #999999;
        font-size: 12px;

        img {
            vertical-align: middle;
            margin-top: -3px;
            margin-right: 4px;
        }


    }
</style>
      