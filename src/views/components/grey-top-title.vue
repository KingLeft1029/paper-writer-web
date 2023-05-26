<template>
    <div class="grey-box-title">
        {{ title }}
        <div class="required flex align-center" v-if="types=='required'">
              <span class="red">*</span>
              <span class="gray">Required</span>
          </div>
    </div>
</template>
      
<script>

export default {
    components: {

    },
    props: {
        title: {
            type: String,
            default: () => ''
        },
        types: {
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
.grey-box-title {
    width: 100%;
    height: 40px;
    background: rgba(241, 241, 241, 0.54);
    border-radius: 6px 6px 0px 0px;
    padding: 0 20px;
    line-height: 40px;
    font-size: 18px;
    color: #333333;
    position: relative;
    .required {
        position: absolute;
        right: 30px;
        top: 6px;
    }

    .red {
        color: #E93636;
        font-size: 14px;
        line-height: 22px;
        margin-top: 7px;
        margin-right: 6px;
    }

    .gray {
        line-height: 22px;
        color: rgba(0, 0, 0, 0.25);
    }
}
</style>
      