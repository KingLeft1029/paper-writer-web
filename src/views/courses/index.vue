<template>
    <div class="container mt41 flex-sub">
        <div class="forums-box-top flex align-center justify-between">
            <div class="screen-box flex align-center">
                <el-select v-model="value" size="mini" value-key="" placeholder="All Videos">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <SortInput label="Newest" type="1" @sort="sortNew"></SortInput>
                <SortInput label="Most Popular" type="2" @sort="sortMost"></SortInput>

            </div>
            <!-- <div>
                <el-input v-model="input" placeholder="Enter">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>

            </div> -->

        </div>
        <div class="mt20 flex">
            <div class="forums-left flex flex-wrap  mr20">
                <course-list></course-list>
            </div>
            <div class="forums-right">
                <div @click="$router.push({path:'/videos/coursestable'})" class="add-thread flex align-center justify-center">
                    <span>Course Management</span>
                    
                </div>
               
                <div class="labels-box mt20">
                    <span>Learners also bought</span>
                    <div class="labels-item">
                        <div v-for="x in 12" :class="{ 'select-label': labelKey == x }">
                            Label A
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
      
<script>
import CourseList from '../components/CourseList.vue'
export default {
    components: {
        CourseList
    },
    data() {
        return {
            value: 'All Videos',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            sortkey: 1,
            labelKey: 1
        };
    },
    mounted() {




    },
    methods: {
        sortNew() { },
        sortMost() { }
    }
};
</script>
<style lang="scss">
.screen-box {
    .el-input {
        height: 22px !important;
        line-height: 22px !important;
    }

    .el-input__inner {
        height: 22px !important;
        line-height: 22px !important;
    }

    .el-input--mini .el-input__icon {
        line-height: 22px !important;
    }

    .el-select {
        width: 151px;
    }


}

.forums-box-top {
    .el-input__inner {
        height: 22px !important;
    }

    .el-input__icon {
        line-height: 22px !important;
    }

}
</style>
<style lang="scss" scoped>
.forums-left {
    width: 70%;
    overflow: hidden;
}

.add-thread {
    width: 358px;
    height: 102px;
    padding-left: 56px;
    background-image: url('@/assets/course/course-manage.png');
    background-size: 1005 100%;
    background-repeat: no-repeat;
    cursor: pointer;

    span {
        font-size: 24px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 33px;
        background: linear-gradient(131deg, #FF8F00 0%, #DC0025 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.labels-box {
    width: 358px;
    // height: 139px;
    border-radius: 6px;
    border: 1px solid rgba(151, 151, 151, 0.16);
    padding: 10px 15px;
    padding-right: 0;

    span {
        font-size: 16px;
        font-weight: 500;
        color: #3E454E;
        line-height: 22px;

    }

    .labels-item {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        cursor: pointer;

        // display: grid;
        //  grid-template-columns: 1fr 1fr 1fr 1fr;
        // grid-gap: 18px;


        div {
            padding: 0 6px;
            height: 20px;
            font-size: 14px;
            color: #939393;
            line-height: 20px;
            margin-right: 15px;
            margin-bottom: 10px;
            border-radius: 10px;
            background: rgba(216, 216, 216, 0.3);
     

            &:hover {
                background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
                color: #fff;
            }
        }

        .select-label {
            background: linear-gradient(131deg, #ff8f00 0%, #dc0025 100%);
            color: #fff;
        }
    }


}
</style>
      