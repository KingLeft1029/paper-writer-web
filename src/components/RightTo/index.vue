<template>
    <div class="right-to-box">
        <router-link class="link-type" :to="'/register'">
            <span>{{ label }}</span>
            <img src="../../assets/person/yellow-right.png" alt="">
        </router-link>

    </div>
</template>

<script>

export default {
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    components: {

    },
    data() {
        return {

        };
    },
};
</script>

<style lang="scss" scoped>
.right-to-box {

    a {
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        display: block;
        // width: 108px;
        font-weight: 600;
        color: #3E454E;
        text-decoration: none;
        line-height: 22px;
        // display: flex;
        // justify-content: space-between;
        // align-items: center;

        img {
            width: 6px;
            height: 11px;
            margin-left: 8px;
            vertical-align: middle;
        }

    }

}
</style>
