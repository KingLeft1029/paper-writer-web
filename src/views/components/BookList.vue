<template>
    <div class="book-box">
        <div class="book-item flex flex-direction pointer" v-for="x in 8">
            <div class="book-top" :style="{ backgroundImage: 'url(' + url + ')' }"></div>
            <div class="name text-cut text-cut2" title="Course Name Course nCourse Name Course">
                        Course Name Course nCourse Name Course nCourse Name Course nCourse Name Course nCourse Name Course
                        nCourse Name Course nCourse Name Course n
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
.book-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 18px;
    .book-item {
    width: 191px;
    // height: 270px;
    border-radius: 6px;
    border: 1px solid rgba(151, 151, 151, 0.18);
    padding: 13px 20px;

    &:hover{
            border-color: #dc0025;
        }
   
    .book-top {
        width: 100%;
        height: 203px;
        transition: all 0.4s;
        -moz-transition: all .4s;
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        background-repeat: no-repeat;
        /* 不会重复 */
        background-position: center;
        /* 是为了让图片放大的时候从中部放大，不会偏移 */
        background-size: 100% 100%;
        margin-bottom: 12px;

        &:hover {
            background-size: 110% 110%;
        }
    }
}
}


</style>
