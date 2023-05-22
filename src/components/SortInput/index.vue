<template>
    <div class="sort-box flex align-center justify-between" :class="{'orange-color':type==1,'white-color':type==2}">
        <span>{{ label }}</span>
        <div class="triangle-box flex flex-direction">
            <img src="@/assets/person/up.png" v-if="sortkey == 2" alt="" @click="sort(1)">
            <img src="@/assets/person/up-active.png" v-else alt="">
            <img src="@/assets/person/down.png" alt="" v-if="sortkey == 1" @click="sort(2)">
            <img src="@/assets/person/down-active.png" v-else alt="">
        </div>
    </div>
</template>
      
<script>

export default {
    props:{
        label:{
            type:String,
            default:()=>''
        },
        type:{
            type:String,
            default:()=>''
        },
    },
    components: {

    },
    data() {
        return {
            sortkey:1
        };
    },
    methods: {
        sort(num) {
            if (num == 1) {
                // 升序
                this.sortkey=1
                this.$emit('sort',1)
            } else {
                // 降序
                this.sortkey=2
                this.$emit('sort',2)
            }
        }
    }
};
</script>
      
<style lang="scss" scoped>
   .sort-box {
            width: 118px;
            height: 22px;
            // height: 28px;

            border-radius: 3px;
            margin-left: 21px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 14px;
            font-weight: 400;
            color: #61687C;
            line-height: 22px;
            border: 1px solid rgba(151, 151, 151,0.5);

            img {
                width: 8px;
                cursor: pointer;
                // height: 4px;
            }
        }
        .orange-color{
            background: rgba(238, 77, 17, 0.2);
        }
        .white-color{
            background-color: #fff;
        }
    
</style>
      