
<template>
    <el-button class="flex justify-center align-center" :class="btnclass" :disabled="disabled">
        <img class="btn-left-img" v-if="btnSrc" :src="btnSrc" alt="">
        {{ btnText }}
    </el-button>
</template>

<script>

export default {
    name: '',
    components: {},
    props: {
        btnSrc: {
            type: String,
            default: () => ''
        },
        btnText: {
            type: String,
            default: () => ''
        },
        btnType: {
            type: String,
            default: () => ''
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
    },
    data() {
        return {

        };
    },
    computed: {
        btnclass() {
            let val = ''
            switch (this.btnType) {
                case '1':
                    val = 'btnA'
                    break;
                case '2':
                    val = 'btnB'
                    break;
                case '3':
                    val = 'btnC'
                    break;
                case '4':
                    val = 'btnD'
                    break;
                case '5':
                    val = 'btnE'
                    break;
                case '6':
                    val = 'btnF'
                    break;
                case '7':
                    val = 'btnG'
                    break;
                case '8':
                    val = 'btnH'
                    break;
                case '9':
                    val = 'btnI'
                    break;
                case '10':
                    val = 'btnJ'
                    break;
                case '11':
                    val = 'btnK'
                    break;
                case '12':
                    val = 'btnL'
                    break;
                case '13':
                    val = 'btnM'
                    break;
            }
            return val

        }
    },
    watch: {},
    methods: {

    },
    created() {

    },
    mounted() {

    },
}
</script>
<style scoped lang="scss">
/* @import url(); 引入公共css类 */
/* 保存 确定 */
.btn-left-img {
    margin-right: 1px;
    vertical-align: middle;
    margin-top: -2px;
}

.btnA {
    width: 120px;
    height: 32px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    font-size: 14px;
    color: #fff;
    border: none;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);
    }
}

// 取消
.btnB {
    width: 120px;
    height: 32px;
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(246, 107, 9, 0.5), rgba(223, 13, 33, 0.5)) 1 1;
    font-size: 14px;
    color: #FFFFFF;
    background: linear-gradient(180deg, #F5670A 0%, #DC0025 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    // &:hover {
    //     background: rgba(246, 107, 9, 0.2);
    //     color: #F5670A;
    // }
}

//Register Now
.btnC {
    width: 160px;
    height: 36px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    border: none;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);
    }
}

.btnD {
    width: 260px;
    height: 48px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    border: none;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);
    }
}

//border  icon
.btnE {
    width: 78px;
    height: 26px;
    background: rgba(255, 143, 0, 0.08);
    border-radius: 4px;
    color: #FF8F00;
    border: 1px solid #E00E22;
    font-size: 13px;

    &:hover {
        background: rgba(255, 143, 0, 0.2);

    }

}

// 提交
.btnF {
    width: 128px;
    height: 36px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    border-radius: 4px;
    border: none;
    color: #fff;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);

    }
}

//Add course videos
.btnG {
    width: 140px;
    height: 32px;
    border: none;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    color: #fff;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);

    }
}

.btnH {
    width: 50px;
    height: 20px;
    background: rgba(255, 143, 0, 0.08);
    border-radius: 4px;
    color: #FF8F00;
    border: 1px solid #E00E22;
    padding: 0 0;
    font-size: 13px;

    &:hover {
        background: rgba(255, 143, 0, 0.2);

    }

}

.btnI {
    width: 78px;
    height: 26px;
    border-radius: 4px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    font-size: 14px;
    color: #fff;
    border: none;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);

    }

}

.btnJ {
    width: 101px;
    height: 26px;
    background: rgba(255, 143, 0, 0.08);
    border-radius: 4px;
    color: #FF8F00;
    border: 1px solid #E00E22;
    font-size: 13px;

    &:hover {
        background: rgba(255, 143, 0, 0.2);

    }

}

.btnK {
    width: 156px;
    height: 32px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    color: #fff;
    border-radius: 4px;
    border: none;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);

    }
}

.btnL {
    width: 145px;
    height: 32px;
    background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
    color: #fff;
    border-radius: 4px;
    border: none;

    &:hover {
        background: linear-gradient(131deg, rgba(255, 143, 0, 0.8) 0%, rgba(220, 0, 37, 0.8) 100%);

    }
}

.btnM {
    width: 145px;
    height: 32px;
    background: rgba(255, 143, 0, 0.08);
    border-radius: 4px;
    color: #FF8F00;
    border: 1px solid #E00E22;
    font-size: 13px;

    &:hover {
        background: rgba(255, 143, 0, 0.2);

    }

}
</style>