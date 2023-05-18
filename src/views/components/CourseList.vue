<template>
    <div class="course-list ">
        <div class="course-item" v-for="(item, index) in 6" :key="item">
            <div class="course-top" :style="{ backgroundImage: 'url(' + url + ')' }">
                <!-- <img src="../../assets/course/img.png" alt=""> -->
                <img class="status-img" src="../../assets/course/free.png" alt="">
                <!-- <img src="../../assets/course/paid.png" alt=""> -->
            </div>
            <div class="course-bottom">
                <div class="name text-cut text-cut2" title="Course Name Course nCourse Name Course">
                    Course Name Course nCourse Name Course nCourse Name Course nCourse Name Course nCourse Name Course
                    nCourse Name Course nCourse Name Course n
                </div>
                <div class="tag">
                    <el-tag v-for="x in 8">标签一</el-tag>
                </div>
                <div class="ink flex align-center">
                    <span class="yellow big-size">9999Ink</span>
                    <div class="col-line mlr"></div>
                    <span class="grey">21 Learners</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            url: require('../../assets/course/img.png')
        };
    },
};
</script>

<style lang="scss" scoped>
.course-list {
    // margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.7%;
    grid-auto-flow: row;

    // grid-template-areas:
    //     ". . ."
    //     ". . .";
    justify-content: space-around;

    .course-item {
        margin-bottom: 20px;

        background: #ffffff;
        border-radius: 6px;
        border: 1px solid rgba(151, 151, 151, 0.18);
        cursor: pointer;

        &:hover {
            border-color: #dc0025;
        }


        .course-top {
            height: 184px;
            width: 100%;
            transition: all 0.4s;
            -moz-transition: all .4s;
            -webkit-transition: all .4s;
            -o-transition: all .4s;
            background-repeat: no-repeat;
            /* 不会重复 */
            background-position: center;
            /* 是为了让图片放大的时候从中部放大，不会偏移 */
            background-size: 100% 100%;

            &:hover {
                background-size: 110% 110%;
            }

            .status-img{
                margin-top: -2px;
            }
        }

        .course-bottom {
            padding: 8px 20px;

            .name {
                width: 100%;
                margin-bottom: 5px;
                font-weight: 600;
                color: #3E454E;
                line-height: 22px;
            }

            .tag {
                display: grid;
                margin-bottom: 8px;
                grid-template-columns: repeat(auto-fill, 56px);
                grid-gap: 10px;

                .el-tag {
                    background-color: rgba(151, 151, 151, 0.18);
                    border: none;
                    color: #61687C;
                    height: 20px;
                    line-height: 24px;
                    text-align: center;
                    cursor: pointer;
                }

            }

            .ink {
                line-height: 28px;

                .mlr {
                    margin: 0 11px;
                }
            }
        }

    }
}
</style>
