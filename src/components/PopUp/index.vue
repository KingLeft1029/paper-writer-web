<template>
 
        <!-- 添加或修改菜单对话框 -->
        <el-dialog custom-class="dialog-box"  :title="title" :visible.sync="show" :width="width + 'px'"
            append-to-body>
            <img class="close" @click="close" src="@/assets/icon/close.png" alt="">
            <slot></slot>
        </el-dialog>

</template>
        
<script>
export default {
    components: {},
    props: {
        title: {
            type: String,
            default: () => ''
        },
        width: {
            type: String,
            default: () => '900'
        }
    },
    data() {
        return {
            show: false,

        };
    },
    methods: {
        open() {
            this.show = true;
        },
        close() {
            this.show = false
        }
    },
};
</script>
        
<style lang="scss" >
.dialog-box {
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    .el-dialog__header {
        background: rgba(241, 241, 241, 0.54);
        padding: 11px 20px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .el-icon-close:before {
        content: '';
    }

    .close {
        position: absolute;
        top: 14px;
        right: 20px;
        cursor: pointer;
    }

}</style>
        