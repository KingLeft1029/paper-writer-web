<template>
    <div class="empty-box">
        <img src="../../assets/person/empty.png" alt="">
        <span>{{ emptyLabel }}</span>
    </div>
</template>

<script>

export default {
    components: {

    },
    props: {
        emptyImg: {
            type: String,
            default: ''
        },
        emptyLabel: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        };
    },
};
</script>

<style lang="scss" scoped>
.empty-box {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 16px;
    }

    span {

        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 24px;
    }
}
</style>
